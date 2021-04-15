class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.other.dream_world.front_default;
        this.type = data.types[0].type.name;
        this.descriptionUrl = data.species.url;
        this.description = data.species.url;
    }
}

export default Pokemon;