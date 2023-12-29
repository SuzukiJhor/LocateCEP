import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('');

  function handleSearch() {
    alert("valor " + input)
  }

  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>

     <div className="container-input">
      <input 
      type="text"
      placeholder="Digite seu CEP"
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF"/>
      </button>
     </div>

     <main className='main'>
    <h2> CEP: 7912846</h2>

    <span>Rua TESTE</span>
    <span>Complemento: Algum complemneto</span>
    <span>Vila Bosque</span>
    <span>Campo Grande - MT</span>
     </main>
    </div>
  );
}

export default App;
