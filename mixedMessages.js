let jokePart = {
    animalList: ['fish', 'dog', 'cat', 'bear', 'duck', 'lion', 'worm', 'bird', 'tiger', 'penguin'],
    foodList: ['pizza', 'burger', 'pasta', 'salad', 'sushi', 'steak', 'chicken curry', 'fish and chips', 'tacos', 'sandwich'],
    placeList: ['forest', 'city', 'mountains', 'beach', 'desert', 'countryside', 'lake', 'valley', 'glacier', 'plains'],

    randomAnimalGenerator() {
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
    randomFoodList() {
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
    randomPlaceList() {
        let holdPlace = [];
        for (let i = 0; i < 3; ++i) {
            holdPlace.push(this.placeList[Math.floor(Math.random() * this.placeList.length)]);
        };
        if (holdPlace.length === 3) {
            return holdPlace[Math.floor(Math.random() * holdPlace.length)];
        } else {
            return 'something went wrong.';
        };
    }
};



console.log(jokePart.randomAnimalGenerator());