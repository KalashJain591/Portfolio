 import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import SocialLinks from './SocialLinks';
import About from './About';
import Portfolio from './Portfolio';
import TechStack from './TechStack';
import Contact from './Contact';



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <TechStack/>
      <Contact/>
    </div>
  );
}

export default App;
