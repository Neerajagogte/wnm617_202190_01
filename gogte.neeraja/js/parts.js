
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

const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id}">
   <div class="flex-none animal-popup-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="flex-stretch animal-popup-body padding-md">
      <div class="animal-popup-name">${o.name}</div>
      <div class="animal-popup-colour"><strong>Colour: </strong> ${o.type}</div>
      <div class="animal-popup-species"><strong>Species: </strong> ${o.species}</div>
   </div>
</div>
`;


const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => `
<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <input type="${type}" id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
</div>
`;

const FormControlTextarea = ({namespace,name,displayname,placeholder,value}) => `
<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <textarea id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}">${value}</textarea>
</div>
`;


const makeAnimalFormInputs = (o,namespace) => `
${FormControlInput({
   namespace:namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type the butterfly name",
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type the butterfly colour",
   value:o.type
})}
${FormControlInput({
   namespace:namespace,
   name:"species",
   displayname:"Species",
   type:"text",
   placeholder:"Type the butterfly species",
   value:o.species
})}
${FormControlTextarea({
   namespace:namespace,
   name:"description",
   displayname:"Description",
   placeholder:"Type the butterfly Description",
   value:o.description
})}
`;



