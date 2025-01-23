import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainComponent from './Components/MainComponent'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element= {<MainComponent/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
