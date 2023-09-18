import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOption/PriceOptions'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-7xl bg-red-400 text-center'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}


export default App
