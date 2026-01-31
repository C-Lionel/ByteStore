import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer props="Bienvenido a ByteStore, tu tienda online de tecnología. 
          Explorá nuestra selección de hardware, componentes
          y periféricos pensados para potenciar tu experiencia digital." />
    </>
  )
}

export default App
