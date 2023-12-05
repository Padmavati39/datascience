import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import AnimatedCards from './Components/AnimatedCards';
import End from './Components/End'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header/>
        <Content/>
        <AnimatedCards/>
        <End/>
        <Footer/>
    </div>
  );
}

export default App;
