//para generar el auto código de inicio de componente pongo "rafce"
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar/>
      <ItemCount stock = "5" ></ItemCount>
    </>
  );
}

export default App;
