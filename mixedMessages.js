//retailJoke here
let retailJoke = {
    partOne: ["'How can I help you?', say the saleperson", "'What can I do for you?', say the saleperson"],
    partTwo: ["'I'm searching for a gun.' says the custommer", "'I'm looking for a money', say the custommer", "'I'm  want a body, can you help me?', say the custommer"],
    partThree: ["in the groccerie", "in the butcher", "in the pet shop", "in the drugstore"],

    generateRandomPartOne() {
        let randomNumber = Math.floor(Math.random() * this.partOne.length);

        switch(randomNumber) {
            case 0:
                return this.partOne[0];
            case 1:
                return this.partOne[1];
            default:
                return console.log('something went wrong, with partOne');
        }
    },

    generateRandomPartTwo() {
        let randomNumber = Math.floor(Math.random() * this.partTwo.length);

        switch(randomNumber) {
            case 0:
                return this.partTwo[0];
            case 1:
                return this.partTwo[1];
            case 2:
                return this.partTwo[2];
            default:
                return console.log('something went wrong, with partTwo');
        }
    },

    generateRandomPartThree() {
        let randomNumber = Math.floor(Math.random() * this.partThree.length);

        switch(randomNumber) {
            case 0:
                return this.partThree[0];
            case 1:
                return this.partThree[1];
            case 2:
                return this.partThree[2];
            case 3:
                return this.partThree[3];
            default:
                return console.log('something went wrong, with partThree')
            }
    },

    sayTheRetailJoke() {
        return console.log(this.generateRandomPartOne() + ' ' + this.generateRandomPartTwo() + ' ' + this.generateRandomPartThree());
    }
    
}

let jokePart = {
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

jokePart.sayTheJoke();
retailJoke.sayTheRetailJoke();