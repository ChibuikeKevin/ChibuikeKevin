import React, { Component } from 'react';
import Product from './Product';
import Profile from './Profile';
import Guest from './Guest';
import Greeting from './Greeting';
import House from './HogwartsHouse';
import WizardList from './WizardList';
import PokemonList from './PokemonList';
import CharacterList from './CharacterList';
import CarBrandList from './CarBrandList';
import AnimalList from './AnimalList';
import Basket from './Basket';
import Toolbox from './Toolbox';
import Favorites from './Favorites';

const description = { title: "forager", hobby: "napper" }

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <h3>Welcome</h3>

        <>
          <Product name="Headphones" price="24.99" />
          <Product name="Keyboard" price="36.99" />
          <Profile name="Ronaldo 7" />
          <Guest />
        </>

        <div>
          <img src="https://mimo.app/i/earth.png" alt="Earth" />
          <Greeting 
              name="Adam" 
              location="Eden" 
              age={176} 
              nice={true} 
              friends={[ "Eve", "Snake" ]} 
              description={description} 
          />
        </div>

        <House students={[
          "Harry Potter",
          "Ronald Weasley",
          "Hermione Granger",
          "Draco Malfoy",
          "Luna Lovegood",
          "Cedric Diggory",
          "Cho Chang",
          "Lavender Brown",
          "Ginny Weasley",
          "Percy Weasley",
          "Seamus Finnigan",
          "Dean Thomas",
          "Charlie Weasley",
          "Fred Weasley",
          "George Weasley",
        ]}
        />
        <WizardList />
        <PokemonList />
        <CharacterList />
        <CarBrandList />
        <AnimalList />
        <Basket />
        <Toolbox />
        <Favorites />
      </div>
    );

  }
  
}

export default App;
