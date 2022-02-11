function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"Siamese",
        Age:3,
        Sound:"Meow",
    };
    delete Animal.Breed
    document.getElementById("Dictionay").innerHTML = Animal.Breed;
}