import React, {Component} from 'react';
import Header from '../header/header.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      followers: [],
    };
  }

  render() {
    return (
        <div className="container">
          <Header/>
        </div>
    );
  }
}

export default App;