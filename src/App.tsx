import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Price from './components/Price';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
      <Header />
        <About />
        <Price />
        <Portfolio/>
        <Footer />
      </div>
    );
  };
  
  export default App;