import React from 'react';
import './styles/PokeDetail.css';
import pokelogo from '../img/pokelogo.jpg';

// const PokeDetail = ({ pokemon }) => {
//     const { id, name, sprite, type } = pokemon;
//     //this.handleOnClick = this.handleOnClick.bind(this);
//     //console.log("ASAFASFSADGADGSSGHD");



//     return (
//         <section className="detail-view">
//         <img src={sprite} className='sprite-image' alt="sprite"/>
//         <div className='data-wrapper'>
//             <h1 className='data-name'>ID: {id} {name}</h1>
//             <p className="data-char">Type: {type}</p>
//         </div>
//         </section>
//     )
// }

class PokeDetail extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            species: {}
        };
        this.pokemon = props.pokemon;
        //this.pokemon = this.props.pokemon
    }


    getPokemonSpecies(url) {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const species = data;
            this.setState({ species  });
          //console.log(this.state.pokemon);
        })
        .catch(err => console.log(err));
    }

    render() {
        
        const pokemon = this.props.pokemon
        
        //console.log(pokemon);

        if(pokemon.id !== undefined) {
            var description = pokemon.description.replaceAll("", " ");
            //this.getPokemonSpecies(pokemon.descriptionUrl); 
            //console.log(species);
            //const species = this.state.species;
            //console.log(species);

            return (
                <section className="detail-view">
                    <img src={pokemon.sprite} className='sprite-image' alt="sprite"/>
                    <div className='data-wrapper'>
                        <h3 className='data-name'>#{pokemon.id}: {pokemon.name}</h3>
                        <h3 className="data-char">Type: {pokemon.type}</h3>
                        <p className="data-desc">{description}</p>
                    </div>
                </section>
            );            
        }
        else {
            console.log("empty");
            return(
                <section className="detail-view">
                    <img src={pokelogo} className='sprite-image' alt="sprite"/>
                    <div className='data-wrapper'>
                        <h1 className='data-name'>Pokemon!</h1>
                        <p className="data-char">Welcome to a Pokedex React project</p>
                    </div>
                </section>
            );
        }

    }
}

export default PokeDetail;