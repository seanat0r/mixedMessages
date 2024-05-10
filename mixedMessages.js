const randomAnimalGenerator = () => {
    const animal = ['fish', 'dog', 'cat', 'bear', 'duck', 'lion', 'worm', 'bird', 'tiger', 'penguin'];
    return animal[Math.floor(Math.random() * animal.length)];
}

let randomAnimal = randomAnimalGenerator();
let randomFood;
let randomPlace;



console.log(randomAnimal);