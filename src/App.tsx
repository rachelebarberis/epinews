import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainComponent from './Components/MainComponent'
import DetailsArticle from './Components/DetailsArticle'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element= {<MainComponent/>}></Route>
      <Route path="/article/:id" element={<DetailsArticle/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
