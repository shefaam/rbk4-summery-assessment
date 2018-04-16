import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';

// Display all Pokémon (with their images)
//  Add a new Pokémon
//  Filter Pokémon based on their type (but NOT on other properties)

const App = (props) => <Starter num={ props.number } />;

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

