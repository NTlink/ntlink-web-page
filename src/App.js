import ntlink1 from './images/ntlink1.png';
import ntlink2 from './images/ntlink2.png';
import ntlink3 from './images/ntlink3.png';
import ntlink4 from './images/ntlink4.png';
import ntlink5 from './images/ntlink5.png';
import ntlink6 from './images/ntlink6.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">


      <header className="App-header">
        <img src={ntlink1} alt="ntlink1" className='ntlink-image'/>
        <img src={ntlink2} alt="ntlink2" className='ntlink-image'/>
        <img src={ntlink3} alt="ntlink3" className='ntlink-image'/>
        <img src={ntlink4} alt="ntlink4" className='ntlink-image'/>
        <img src={ntlink5} alt="ntlink5" className='ntlink-image'/>
        <img src={ntlink6} alt="ntlink6" className='ntlink-image'/>
      </header>
    </div>
  );
}

export default App;
