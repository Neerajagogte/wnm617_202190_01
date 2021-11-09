
const ListPage = async() => {
	let d = await query({type:'animals_by_user_id',params:[sessionStorage.userId]});

	console.log(d);

	$("#page-list .animallist").html(makeAnimalList(d.result));
}