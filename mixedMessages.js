const whichJoke = () => {
    let generateRandomWhichJoke = Math.floor(Math.random() * 100) + 1; //generate a random number from 1-100
    if (generateRandomWhichJoke < 30) {
        retailJoke.sayTheRetailJoke(); // 30% chance
    } else if (generateRandomWhichJoke < 60){
        dogJoke.sayTheDogJoke();  // 30% chance
    } else {
        animalJoke.sayTheAnimalJoke(); // 40% chance
    }
};

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
    
};

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
    sayTheAnimalJoke() {
        console.log(`"Why didn't the ${this.generateRandomAnimals()} go to eat ${this.generateRandomFoods()}? Because it prefers to hang out in the ${this.generateRandomPlaces()}`);
    }
};

let dogJoke = {
    firstDog: ["Buddy", "Ato", "Bailey", "Charlie", "Lucy", "Daisy", "Rocky", "Molly", "Sadie", "Cooper"],
    secondDog: ["Luna", "Ghost", "Bella", "Duke", "Rosie", "Oliver", "Lola", "Jack", "Coockie", "Toby"],
    enviroment: ["Dog parks", "Beach", "Hiking trails", "Pet stores", "Veterinary clinics", "Dog-friendly cafes", "City streets", "Dog daycare centers", "Dog shows", "Family homes"],

    generateRandomFirstDog () {
        const holdFirstDog = [];
        const randomValue = [];

        for (let i = 0; i < 5; i++) {
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

    generateRandomSecondDog () {
        const holdSecondDog = [];
        const randomValue = [];

        for (let i = 0; i < 5; i++) {
            holdSecondDog.push(this.secondDog[Math.floor(Math.random() * this.secondDog.length)]);
            randomValue.push(Math.floor(Math.random() * 20) + 1);
        }
        const randomSwitchCase = randomValue.reduce((a, b) => a * b) //multyplay all elemnts in the array

        //checks which element of the array from holdSecondDog it should use, based of the product of randomValue.
        if (randomSwitchCase > 0 && randomSwitchCase < 64000) {
            return holdSecondDog[0];

        } else if (randomSwitchCase > 64000 && randomSwitchCase < 128000) {
            return holdSecondDog[1];

        } else if (randomSwitchCase > 128000 && randomSwitchCase < 192000) {
            return holdSecondDog[2];

        } else if (randomSwitchCase > 192000 && randomSwitchCase < 256000) {
            return holdSecondDog[3];

        } else if (randomSwitchCase > 256000 && randomSwitchCase < 320000) {
            return holdSecondDog[5];

        } else {
            return console.log(`The numbers are incorect! The Value of randomSwitchCase: ${randomSwitchCase} and the value of the array from randomValue is: ${randomValue}.`);
        }
    },

    generateRandomEnviroment () {
        const holdEnviroment = [];
        const randomValue = [];

        for (let i = 0; i < 5; i++) {
            holdEnviroment.push(this.enviroment[Math.floor(Math.random() * this.enviroment.length)]);
            randomValue.push(Math.floor(Math.random() * 20) + 1);
        }
        const randomSwitchCase = randomValue.reduce((a, b) => a * b) //multyplay all elemnts in the array

        //checks which element of the array from holdEnviroment it should use, based of the product of randomValue.
        if (randomSwitchCase > 0 && randomSwitchCase < 64000) {
            return holdEnviroment[0];

        } else if (randomSwitchCase > 64000 && randomSwitchCase < 128000) {
            return holdEnviroment[1];

        } else if (randomSwitchCase > 128000 && randomSwitchCase < 192000) {
            return holdEnviroment[2];

        } else if (randomSwitchCase > 192000 && randomSwitchCase < 256000) {
            return holdEnviroment[3];

        } else if (randomSwitchCase > 256000 && randomSwitchCase < 320000) {
            return holdEnviroment[5];

        } else {
            return console.log(`The numbers are incorect! The Value of randomSwitchCase: ${randomSwitchCase} and the value of the array from randomValue is: ${randomValue}.`);
        }
    },

    sayTheDogJoke () {
        return console.log(`Why did the dogs ${this.generateRandomFirstDog()} and ${this.generateRandomSecondDog()} refuse to go to the ${this.generateRandomEnviroment()} ? Because they heard it was "ruff" out there!`);
    }
    
};

whichJoke();