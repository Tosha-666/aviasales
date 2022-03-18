import './App.css';
import logo from '../Plane.png' 
import {Ticket} from '../Ticket'
import {Tabs} from '../Tabs'
import {FilterBar} from '../FiltersBar'

function App() {
  return (
<main className='container'>
  <img src={logo} alt='img'/>  
  <Tabs/>
  <Ticket/>
  <FilterBar/>
  </main>
    
  );
}

export default App;
