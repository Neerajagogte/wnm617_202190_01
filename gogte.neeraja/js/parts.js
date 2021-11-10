
const makeAnimalList = templater((o)=>`
<div class="animallist-item">
<div class="display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none animallist-item-image">
		<img src="${o.img}" alt="">
	</div>
	<div class="flex-stretch padding-md">
		<div class="animallist-item-name">${o.name}</div>
		<div class="animallist-item-colour"><strong>Colour: </strong>${o.type}</div>
		<div class="animallist-item-species"><strong>Species: </strong>${o.species}</div>
	</div>
</div>
</div>
`);

const makeUserProfile = (o) => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">
</div>
<div>
   <div class="user-profile-information h1">${o.name}</div>
   <div class="user-profile-information h2">&commat;${o.username}</div>
   <div class="user-profile-information button"><a href="#page-user-settings">Settings</a></div>
</div>
`;