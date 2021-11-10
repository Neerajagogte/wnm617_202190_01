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
         case "page-animal-profile": AnimalProfilePage(); break;
      }
   })





//Form Submits

.on("submit","#signin-form",function(e){
	e.preventDefault();
	checkSigninForm();
})
.on("submit","#list-add-form",function(e){
	e.preventDefault();
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




