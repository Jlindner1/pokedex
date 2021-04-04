import React from 'react';
import './styles/PokeCell.css';


class PokeCell extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            pokemon : null
        };    
        this.url = this.props.url;
        this.handleOnClick = this.props.handleOnClick;
    }


    async componentDidMount() {
        // console.log(this.url);
        // await fetch(this.url).then(response => this.setState({pokemon:response.data})).catch(function(error) {
        //     console.log('Fetch Error: ' + error.message);
        // });
        // const response = await fetch(this.url);
        // const data = await response.json();
        const pokemon = await this.getIndividualPokemon(this.url);
        this.setState({ pokemon });
        //console.log(pokemon);
    }

    async getIndividualPokemon(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    render(){
        const pokemon = this.state.pokemon;
        if (pokemon === null) {
            return <div>Loading ...</div>
        }
        else{
            //console.log(pokemon);
        }

        return (
            <div>
                
                <button onClick={() => this.handleOnClick(this.url)} className="poke-cell">
                    <div className="poke-name"><h3>{pokemon.name}</h3></div>
                    <div className="poke-image">
                        <img  src={pokemon.sprites.other.dream_world.front_default} alt="sprite" />
                    </div>
                </button>              
            </div>
        );        
    }
};


export default PokeCell;