import React, {Component} from 'react';
import Header from '../header/header.component';
import axios from 'axios';
import './app.styles.scss';
import Card from '../card/card.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
      followers: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/dswhitely1')
         .then(response => this.setState(
             state => ({ ...state, card: response.data })))
         .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="container">
          <Header/>
          <div className='cards'>
            {this.state.card && <Card user={this.state.card}/>}
            {this.state.followers.map(
                (follower, index) => <Card key={index} user={follower}/>)}
          </div>
        </div>
    );
  }
}

export default App;