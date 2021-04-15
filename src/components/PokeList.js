import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

class PokeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            poke : [],
            offset : 0,
            displayAmount: 60
        };        
        this.handleOnClick = this.props.handleOnClick.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }


    async getPokemon(newoffset) {
        const offset = this.state.offset + newoffset;
        const displayAmount = this.state.displayAmount;
        //console.log(offset);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${displayAmount}&offset=${offset}`);
        const data = await res.json();
        //return data.results;
        const poke = this.state.poke
        data.results.map((mon) => (poke.push(mon)));
        this.setState({ poke });
        //console.log(this.state.poke);
    }

    nextPage(displayAmount) {
        const newOffset = this.state.offset + displayAmount;
        this.setState({ offset: newOffset });
        this.getPokemon(newOffset);
        //console.log(`next clicked, offset: ${this.state.offset}`);
        //this.setState({ poke: this.getPokemon() });
    }

    async componentDidMount() {
        //const poke = await this.getPokemon();
        //this.setState({ poke })
        //console.log(pokemon);
        this.getPokemon(0);
    }

    render() {

        const pokemon = this.state.poke;
        //console.log(pokemon);

        return (
                <section className="poke-list">
                    {pokemon.map((mon) => (
                        //this.getIndividualPokemon(mon.url),
                        <PokeCell
                            url={mon.url}
                            handleOnClick={this.handleOnClick}
                        />
                    ))}
                    <button className="load-more" onClick={() => this.nextPage(this.state.displayAmount)}>Load More!</button>
                </section> 

            
        )        
    }

}

export default PokeList;