import logo from './logo.svg';
import './App.css';
import Questions from './Components/Questions';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <h1>Piknik is coming soon!!</h1>

      <Questions />

      <Footer />

    </div>
  );
}

export default App;
