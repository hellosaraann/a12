//collection array

const favoriteHousePlants = [{
	name: "Snake Plant",
  light: "any",
  leaves: "tall and pointy",
  specialThing: 'NASA touted air purifier lets out oxygen at night',
  plantPic: 'images/snake-plant.jpg'
},{
	name: "Rubber Tree",
  light: "medium to bright",
  leaves: "rounded and dark red-green",
  specialThing: 'My favorite / biggest plant',
  plantPic: 'images/rubber-tree.jpg'
},{
	name: "Burro's Tail",
  light: "bright",
  leaves: "succulent with cute stubby leaves and trailing stems",
  specialThing: 'Cutest plant I own / easy to make cuttings for friends!',
  plantPic: 'images/burros-tail.jpg'
},{
	name: "Schefflera",
  light: "medium to bright",
  leaves: "leafy bushy plant with umbrella-like leaves",
  specialThing: 'Leaves absorb pollutants apparently',
  plantPic: 'images/schefflera.jpg'
},{
	name: "Zanzibar Gem or ZZ Plant",
  light: "any",
  leaves: "dark green tear-drop leaves on tall stalks",
  specialThing: 'Lives through anything / supposed to be lucky',
  plantPic: 'images/zz-plant.jpg'
}];


//vue var

var vm = new Vue({
  el: "#myCollection",
  data: {
    plants: favoriteHousePlants,
		plantPicInput: '',
		nameInput: '',
		lightInput: '',
		leavesInput: '',
		specialInput: ''
  },
	methods: {
		deletePlant: function(plantObject) {
			this.plants = this.plants.filter( function(plant) {
				if (plant.name !== plantObject.name) {
					return true;
				} else {
					return false;
				}
			})
		},
		addPlant: function(){
			let newPlant = {
				plantPic: this.plantPicInput,
				name: this.nameInput,
				light:  this.lightInput,
				leaves: this.leavesInput,
				specialThing: this.specialInput
			};
			this.plants.push(newPlant);
			this.plantPicInput = this.nameInput = this.lightInput = this.leavesInput = this.specialInput = '';
		}
	}
});
