import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { Monster } from './typings/Monster';
import SearchBox from './components/search-box/search-box.component';

interface IProps {}
interface IState {
  monsters: Monster[];
  searchField: string;
}

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" changeHandler={this.changeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
