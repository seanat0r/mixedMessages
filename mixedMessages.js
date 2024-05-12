let animalJoke = {
    animalList: ['fish', 'dog', 'cat', 'bear', 'duck', 'lion', 'worm', 'bird', 'tiger', 'penguin'],
    foodList: ['pizza', 'burger', 'pasta', 'salad', 'sushi', 'steak', 'chicken curry', 'fish and chips', 'tacos', 'sandwich'],
    placeList: ['forest', 'city', 'mountains', 'beach', 'desert', 'countryside', 'lake', 'valley', 'glacier', 'plains'],

    //select random from 3 list 3 items and select again 3 items from those list to make the joke
    generateRandomAnimals() {
        let holdAnimal = [];
        for (let i = 0; i < 3; ++i) {
            holdAnimal.push(this.animalList[Math.floor(Math.random() * this.animalList.length)]);
        };
        if (holdAnimal.length === 3) {
            return holdAnimal[Math.floor(Math.random() * 3)];
        } else {
            return 'something went wrong.';
        };
    },
    generateRandomFoods() {
        let holdFood = [];
        for (let i = 0; i < 3; ++i) {
            holdFood.push(this.foodList[Math.floor(Math.random() * this.foodList.length)]);
        };
        if (holdFood.length === 3) {
            return holdFood[Math.floor(Math.random() * holdFood.length)];
        } else {
            return 'something went wrong.';
        };
    },
    generateRandomPlaces() {
        let holdPlace = [];
        for (let i = 0; i < 3; ++i) {
            holdPlace.push(this.placeList[Math.floor(Math.random() * this.placeList.length)]);
        };
        if (holdPlace.length === 3) {
            return holdPlace[Math.floor(Math.random() * holdPlace.length)];
        } else {
            return 'something went wrong.';
        };
    },
    sayTheJoke() {
        console.log(`"Why didn't the ${this.generateRandomAnimals()} go to eat ${this.generateRandomFoods()}? Because it prefers to hang out in the ${this.generateRandomPlaces()}`);
    }
};

//add here dogJoke
let dogJoke = {
    firstDog: ["Buddy", "Max", "Bailey", "Charlie", "Lucy", "Daisy", "Rocky", "Molly", "Sadie", "Cooper"],
    secondDog: ["Luna", "Bear", "Bella", "Duke", "Rosie", "Oliver", "Lola", "Jack", "Sophie", "Toby"],
    enviroment: ["Dog parks", "Beaches", "Hiking trails", "Pet stores", "Veterinary clinics", "Dog-friendly cafes", "City streets", "Dog daycare centers", "Dog shows", "Family homes"],

    generateRandomFirstDog () {
        const holdFirstDog = [];
        const randomValue = [];
        let finishValueFirstDog;

        for (i = 0; i < 5; i++) {
            holdFirstDog.push(this.firstDog[Math.floor(Math.random() * this.firstDog.length)]);
            randomValue.push(Math.floor(Math.random() * 20) + 1);
        }
        const randomSwitchCase = randomValue.reduce((a, b) => a * b) //multyplay all elemnts in the array

        //checks which element of the array from holdFirstDog it should use, based of the product of randomValue.
        if (randomSwitchCase > 0 && randomSwitchCase < 64000) {
            return holdFirstDog[0];

        } else if (randomSwitchCase > 64000 && randomSwitchCase < 128000) {
            return holdFirstDog[1];

        } else if (randomSwitchCase > 128000 && randomSwitchCase < 192000) {
            return holdFirstDog[2];

        } else if (randomSwitchCase > 192000 && randomSwitchCase < 256000) {
            return holdFirstDog[3];

        } else if (randomSwitchCase > 256000 && randomSwitchCase < 320000) {
            return holdFirstDog[5];

        } else {
            return console.log(`The numbers are incorect! The Value of randomSwitchCase: ${randomSwitchCase} and the value of the array from randomValue is: ${randomValue}.`);
        }
    },
}


console.log(dogJoke.generateRandomFirstDog());
animalJoke.sayTheJoke();