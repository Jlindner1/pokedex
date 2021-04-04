import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

class PokeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            poke : [],
        };        
        this.handleOnClick = this.props.handleOnClick.bind(this);
    }


    async getPokemon() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        const data = await res.json();
        return data.results;
    }

    async componentDidMount() {
        const poke = await this.getPokemon();
        this.setState({ poke })
        //console.log(pokemon);
    }

    render() {
        return (
            <section className="poke-list">
                {this.state.poke.map((mon) => (
                    //this.getIndividualPokemon(mon.url),
                    <PokeCell
                        url={mon.url}
                        handleOnClick={this.handleOnClick}
                    />
                ))}
            </section>
        )        
    }

}

export default PokeList;