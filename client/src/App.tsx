import React from 'react'; // we need this to make JSX compile
import logo from './logo.svg';
import './App.css';


class App extends React.Component<{}, {}> {
  state = {
    hello: ''
  };

  componentDidMount() {
    this.fetchCow()
  }

  fetchCow = async () => {
    const response = await fetch(`/api/users`);
    const res = await response.json();
    const hello = res.message;
    this.setState({ hello });
  };


  render() {
    return (
        <div className="App">
          <div>
            <h1>
              HELLO
            </h1>
          </div>
          <h2>{this.state.hello}</h2>
        </div>
    )
  }

}

export default App;
