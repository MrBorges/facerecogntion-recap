import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <ParticlesBg type="circle" bg={true} />

      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
