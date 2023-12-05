import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo = "Bienvenidos a mi E-Commerce" />
    </div>
  )
}

export default App
