import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };

    this.handleSearchString = this.handleSearchString.bind(this);
    this.markTitle = this.markTitle.bind(this);
  }

  handleSearchString = searchString => {
    this.setState({ searchString })
  }

  markTitle = () => {

  }

  render() {
    let cont = 0;
    
    return (
      <div className="App">
        <Navbar searchString={this.handleSearchString}/>
        <div className="container mt-10">
          <div className="row">
            
              { 
                this.recipes.map((info, i) => {
                if(
                    (this.state.searchString === '') ||
                    (info.title.toLowerCase().includes(this.state.searchString.toLowerCase())) 
                    || 
                    (info.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase()))
                  ) {
                  
                  return (
                    <RecipeItem 
                      key={i}
                      title={info.title}
                      titleArr={Array.from(info.title)}
                      thumbnail={info.thumbnail}
                      ingredients={info.ingredients}
                      href={info.href}
                      // index={info.title.indexOf(this.state.searchString)}
                      searchString={this.state.searchString}
                    />
                  )
                } else {
                  cont++
                }

                if(cont === 20) {
                  return (
                    <div className="col" key={cont}>
                      <p className="h1">No results to show </p>
                    </div>
                  )
                }
              }) 
              }
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
