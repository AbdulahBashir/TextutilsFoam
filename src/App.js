import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title="AccuText" />  {/* ✅ Bold title in Navbar.js */}
      <div className='container my-3'>
        <Textform heading="Enter The Text To Analyze Below"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
