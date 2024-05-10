const randomAnimalGenerator = () => {
    const animal = ['fish', 'dog', 'cat', 'bear', 'duck', 'lion', 'worm', 'bird', 'tiger', 'penguin'];
    return animal[Math.floor(Math.random() * animal.length)];
};

const randomFoodGenerator = () => {

};

let jokePart = {
    animalList: ['fish', 'dog', 'cat', 'bear', 'duck', 'lion', 'worm', 'bird', 'tiger', 'penguin'],
    foodList: ['chips'],
    placeList: ['town']
};



console.log(randomAnimal);