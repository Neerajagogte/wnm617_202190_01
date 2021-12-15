
const makeAnimalList = templater((o)=>`
<div class="animallist-item">
<div class="display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none animallist-item-image">
		<img src="${o.img}" alt="">
	</div>
	<div class="flex-stretch padding-md">
		<div class="animallist-item-name">${o.name}</div>
      <div class="animallist-item-species"><strong>Species: </strong></div>
      <div class="animallist-item-description">${o.species}</div>
		<div class="animallist-item-colour"><strong>Colour: </strong></div>
      <div class="animallist-item-description">${o.type}</div>		
	</div>
</div>
</div>
`);

const makeUserProfile = (o) => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">
</div>
<div>
   <div class="user-profile-information name centered">${o.name}</div>
   <div class="user-profile-information-title centered"><strong>Username: </strong></div>
   <div class="centered">${o.username}</div>
   <div class="user-profile-information-title centered padding-top-sm"><strong>Email id: </strong></div>
  <div class="centered">${o.email}</div>  
</div>
<div class="floater bottom right padding-bottom-lg">
            <a href="#page-user-edit" class="btn-circle">
            <img class="edit-icon" src="img/edit.png">
            </a>
         </div>
`;




const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id}">
   <div class="flex-none animal-popup-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="flex-stretch animal-popup-body padding-sm">
      <div class="animal-popup-name">${o.name}</div>
      <div class="animal-popup-species"><strong>Species: </strong> ${o.species}</div>
      <div class="animal-popup-colour"><strong>Colour: </strong> ${o.type}</div>
      
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
   name:"species",
   displayname:"Species",
   type:"text",
   placeholder:"Type the butterfly species",
   value:o.species
})}
${FormControlInput({
   namespace:namespace,
   name:"type",
   displayname:"Colour",
   type:"text",
   placeholder:"Type the butterfly colour",
   value:o.type
})}

${FormControlTextarea({
   namespace:namespace,
   name:"description",
   displayname:"Description",
   placeholder:"Type the butterfly Description",
   value:o.description
})}
`;

const makeUserFormInputs = (o,namespace) => `
${FormControlInput({
   namespace:namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type The User Name",
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type The User Handle",
   value:o.username
})}
${FormControlInput({
   namespace:namespace,
   name:"email",
   displayname:"Email",
   type:"email",
   placeholder:"Type The Email Address",
   value:o.email
})}
`;



const makeAnimalChoiceSelect = ({animals,name,chosen=0}) => `
<select id="${name}">
   ${templater(o=>`
      <option value="${o.id}" ${o.id===chosen?'selected':''}>${o.name}</option>
   `)(animals)}
</select>
`;


const makeAnimalListSet = (arr,target="#page-list .animallist") => {
   $(target).html(makeAnimalList(arr));
}


