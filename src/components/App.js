import React, { Component } from 'react';
import PokeList from './PokeList';
import PokeDetail from './PokeDetail';
import './styles/App.css';
import Pokemon from '../Pokemon';

class App extends Component {
  constructor () {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon  });
        //console.log(this.state.pokemon);
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <PokeDetail pokemon={this.state.pokemon} />
      </div>
    );
  }
}

// class PokeDetail extends React.Component {
//   constructor (props) {
//       super(props);
//       this.state = {
//       };
//       this.sprite = props.sprite;
//       this.id = props.id;
//       this.name = props.name;
//       this.type = props.type;
//   }

//   render() {
      
//       console.log(this.sprite);
//       return (
//           <section className="detail-view">
//               <img src={this.sprite} className='sprite-image' alt="sprite"/>
//               <div className='data-wrapper'>
//                   <h1 className='data-name'>ID: {} {}</h1>
//                   <p className="data-char">Type: {}</p>
//               </div>
//           </section>
//       );
//   }
// }

export default App;