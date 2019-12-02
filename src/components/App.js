import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      recipes: recipes.results
    };
  }

  handleChange = event => {
    this.setState({
      searchString: event.target.value
    })


  }



  render() {
    const searchString = this.state.searchString

    const filteredRecipes = this.state.recipes.filter(recipe => {
      return (
        recipe.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
        recipe.ingredients.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
      )
    })

    return (

      <div className="App">
        <Navbar onChange={this.handleChange} value={searchString} />
        <div className="container mt-10">
          <div className="row">
            {filteredRecipes.map((recipe, index) => (
              <RecipeItem
                key={index}
                href={recipe.href}
                thumbnail={recipe.thumbnail}
                title={recipe.title}
                ingredients={recipe.ingredients}
              />
            ))}


          </div>

          {filteredRecipes ? <h1>No Results to show </h1> : null}



        </div>
      </div>
    );
  }
}

export default App;
