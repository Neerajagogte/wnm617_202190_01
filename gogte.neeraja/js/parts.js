
const makeAnimalList = templater((o)=>`
<div class="animallist-item">
<a href="#page-animal-profile" class="display-flex">
	<div class="flex-none animallist-item-image">
		<img src="${o.img}" alt="">
	</div>
	<div class="flex-stretch animallist-item-body padding-md">
		<div class="animallist-item-name">${o.name}</div>
		<div class="animallist-item-colour"><strong>Colour: </strong>${o.type}</div>
		<div class="animallist-item-species"><strong>Species: </strong>${o.species}</div>
	</div>
</a>
</div>
`);