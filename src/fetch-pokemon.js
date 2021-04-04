import React, { Component } from 'react'

export default class FetchPokemon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon : [],
            indPokemon : null
        };
    }


    async getPokemon() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        const data = await res.json();
        return data.results;
    }

    async componentDidMount() {
        const pokemon = await this.getPokemon();
        this.setState({ pokemon })
    }

    async getIndividualPokemon() {
        const res = await fetch(url);
        const data = await res.json();
        return data.result;
    }

    render() {
        return (
            <div>
                {this.state.pokemon.map((mon) => (
                    this.getIndividualPokemon(mon.url),
                    <Pokemon
                        name={mon.name}
                        sprite={this.state.indPokemon.sprite}
                        url={mon.url}
                    />
                ))}
            </div>
        )
    }


}

const Pokemon = ({ name, sprite, url }) => (
    <div>
        <img src={sprite} />
        <div>
            <p>{name}</p>
            <p>{url}</p>
        </div>
    </div>
);

