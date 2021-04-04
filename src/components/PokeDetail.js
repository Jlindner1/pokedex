import React from 'react';
import './styles/PokeDetail.css';

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
            //pokemon : props.pokemon
        };
        this.pokemon = props.pokemon;
        //this.pokemon = this.props.pokemon
    }

    render() {
        
        const pokemon = this.props.pokemon
        console.log(pokemon);

        if(pokemon.id !== undefined) {
            return (
                <section className="detail-view">
                    <img src={pokemon.sprite} className='sprite-image' alt="sprite"/>
                    <div className='data-wrapper'>
                        <h1 className='data-name'>ID: {pokemon.id} {pokemon.name}</h1>
                        <p className="data-char">Type: {pokemon.type}</p>
                    </div>
                </section>
            );            
        }
        else {
            console.log("empty");
            return(
                <section className="detail-view">
                    <img src="/src/img/pokelogo.jpg" className='sprite-image' alt="sprite"/>
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