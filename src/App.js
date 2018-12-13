import './App.scss';
import Card from './Card';
import data from './data/data';
import React, { Component } from 'react';

class App extends Component {
  
  constructor (props){

    super(props)
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }
  
  showPreview = () => {
    const newIndex = this.state.property.index-1
    this.setState({
      property: data.properties[newIndex]
    })

  }

  showNext = () => {
  const newIndex = this.state.property.index+1
  this.setState({
    property: data.properties[newIndex]
  })

  }


  render() {
    return (
      <div className="App">
        
          <h1>Wybierz miasto ktorym bedziesz zarzadzac</h1>
            <button onClick={() => this.showPreview()} disabled={this.state.property.index === 0}>Preview</button>
            <button onClick={() => this.showNext()} disabled={this.state.property.index === data.properties.length-1}>Next</button>
        <div className="cards-slider">
          <div className="cards-slider-wrapper" style={{'transform': `translateX(-${this.state.property.index*(100/this.state.properties.length)}%`}}>
          {
            this.state.properties.map(property => <Card key={property._id} property={property}/> )
          }
              
          </div>
        </div>

      </div>
    );
  }
}

export default App;
