
const resultQuery = async (options) => {
   // destructure
   let {result,error} = await query(options);
   if(error) {
      throw(error);
      return;
   }
   return result;
}


const ListPage = async() => {
   // destructure
   let result = await resultQuery({
      type:'animals_by_user_id',
      params:[sessionStorage.userId]
   });

   $("#page-list .animallist").html(makeAnimalList(result));
}


const RecentPage = async() => {
   let result = await resultQuery({
      type:'recent_animal_locations',
      params:[sessionStorage.userId]
   });
   
   let animals = result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]);

   let mapEl = await makeMap("#page-recent .map");
   makeMarkers(mapEl,result);
}


const UserProfilePage = async() => {
   let result = await resultQuery({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });
   
   let [user] = result;
   $("#page-user-profile [data-role='main']").html(makeUserProfile(user));
}


const AnimalProfilePage = async() => {
   let animal_result = await resultQuery({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   });

   let [animal] = animal_result;
   $(".butterfly-profile img").attr("src",animal.img);

   $(".butterfly-profile-information .butterfly-species").html(animal.species);
   $(".butterfly-profile-information .appearance-description").html(animal.description);


   
}

const AnimalProfileMapPage = async() => {

   let locations_result = await resultQuery({
      type:'locations_by_animal_id',
      params:[sessionStorage.animalId]
   });

   let mapEl = await makeMap("#page-animal-profile-map .map");
   makeMarkers(mapEl,locations_result);
}



const AnimalEditPage = async() => {
   let animal_result = await resultQuery({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   });

   let [animal] = animal_result;
   $(".butterfly-profile img").attr("src",animal.img);

   $("#edit-animal-name").val(animal.name);
   $("#edit-animal-colour").val(animal.colour);
   $("#edit-animal-species").val(animal.species);
}








