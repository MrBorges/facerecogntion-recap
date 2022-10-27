import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
    }
  }

  onButtonSubmit = (event) =>{
    this.setState({imageUrl: this.state.input})
  }

  onInputChange = (event) =>{        
    this.setState({input: event.target.value })
  }

  render(){
    return (
      <div className="App">
  
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        
        <ParticlesBg type="circle" bg={true} />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
        
  
      </div>
    );
  }
  
}

export default App;
