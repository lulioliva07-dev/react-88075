import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './Components/NavBar'





export default function App() {

  return(
    <>
      <NavBar/>   
      
       
      <div className='container'>
        <ItemListContainer greeting="Bienvenido a Itrend Store"/>

      </div>

    </>
)
}


