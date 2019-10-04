import React, {Component} from 'react';
import Header from '../header/header.component';

import './app.styles.scss'
import Card from '../card/card.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
      followers: [],
    };
  }

  render() {
    return (
        <div className="container">
          <Header/>
          {this.state.card && <Card user={this.state.card} />}
        </div>
    );
  }
}

export default App;