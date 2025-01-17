//DOCUMENT READY
$(()=>{

	checkUserId();

// Event Delegation
$(document)

 .on("pagecontainerbeforeshow",function(event, ui){
      // Page Routing
      switch(ui.toPage[0].id) {
         case "page-recent": RecentPage(); break;
         case "page-list": ListPage(); break;
         case "page-user-profile": UserProfilePage(); break;
         case "page-user-edit": UserEditPage(); break;
         case "page-animal-profile": AnimalProfilePage(); break;
         case "page-animal-profile-map": AnimalProfileMapPage(); break;
         case "page-animal-edit": AnimalEditPage(); break;
         case "page-animal-add": AnimalAddPage(); break;
         case "page-location-set-location": LocationSetLocationPage(); break;
         case "page-location-choose-animal": LocationChooseAnimalPage(); break;
      }
   })





//Form Submits

.on("submit","#signin-form",function(e){
	e.preventDefault();
	checkSigninForm();
})

 .on("submit", "#signup-form", function(e) {
      e.preventDefault();
      checkSignup();
   })

.on("submit", "#signup-form2", function(e) {
      e.preventDefault();
      checkSignup2();
   })


.on("submit","#list-add-form",function(e){
	e.preventDefault();
})

.on("submit", "#animal-add-form", function(e) {
      e.preventDefault();
      animalAddForm();
})

.on("submit", "#animal-edit-form", function(e) {
      e.preventDefault();
      animalEditForm();
})

.on("submit", "#list-search-form", function(e) {
      e.preventDefault();
      let s = $(this).find("input").val();
      checkSearchForm(s);
   })



// FORM ANCHOR CLICKS

   .on("click",".js-submituseredit",function(e) {
      e.preventDefault();
      userEditForm();
   })

   .on("click",".js-submituserpassword",function(e) {
      e.preventDefault();
      userEditPasswordForm();
   })


   .on("click",".js-submitlocationform",function(e){
      e.preventDefault();
      locationAddForm();
   })



   .on("click","[data-filter]",function(e){
      let {filter,value} = $(this).data();
      if(value=="") ListPage();
      else checkFilter(filter,value);
   })
   

   .on("change",".image-picker input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d);
         $(this).parent().prev().val("uploads/"+d.result);
         $(this).parent().css({
            "background-image":`url(uploads/${d.result})`
         });
      })
   })

  .on("click",".js-submituserupload",function(e) {
      let image = $("#user-upload-filename").val();
      query({
         type:"update_user_image",
         params: [image,sessionStorage.userId]
      }).then(d=>{
         if(d.error) throw(d.error);

         history.go(-1);
      })
   })

    .on("click",".js-submitanimalupload",function(e) {
      let image = $("#animal-upload-filename").val();
      query({
         type:"update_animal_image",
         params: [image,sessionStorage.animalId]
      }).then(d=>{
         if(d.error) throw(d.error);

         history.go(-1);
      })
   })


    .on("click",".js-animal-delete",function(e){
      query({
         type:"delete_animal",
         params: [sessionStorage.animalId]
      }).then(d=>{
         history.go(-1);
      })
   })



// ON CHANGE

   .on("change","#location-animal-choice-select",function(e){
      $("#location-animal-choice").val(this.value)
   })



//Anchor Clicks
.on("click",".js-logout",function(e) {
	e.preventDefault();
	sessionStorage.removeItem("userId");
	checkUserId();
})
.on("click",".animal-jump",function(e) {
      if(!$(this).data("id")) throw("No ID on element");
      sessionStorage.animalId = $(this).data("id");
      $.mobile.navigate("#page-animal-profile");
   })


.on("click","[data-setnavigateback]",function(e){
      $("#location-navigateback").val($(this).data("setnavigateback"))
   })

.on("click",".js-navigate-back",function(e){
      window.history.go(+$("#location-navigateback").val());
   })



.on("click",".js-chooseanimal",function(e){
      $("#location-animal-choice").val(sessionStorage.animalId);
   })



.on("click","[data-activate]",function(e){
	e.preventDefault();
	let target = $(this).data("activate");
	$(target).addClass("active")
})
.on("click","[data-deactivate]",function(e){
	e.preventDefault();
	let target = $(this).data("deactivate");
	$(target).removeClass("active")
})
.on("click","[data-toggle]",function(e){
	e.preventDefault();
	let target = $(this).data("toggle");
	$(target).toggleClass("active")
})
.on("click","[data-activateone]",function(e){
      let target = $(this).data("activateone");
      $(target).addClass("active").siblings().removeClass('active');
   })




$("[data-template]").each(function(){
	let target = $(this).data("template");
	$(this).html($(target).html());
})

});




