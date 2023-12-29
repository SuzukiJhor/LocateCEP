import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './styles.css';

function App() {

  const [input, setInput] = useState('');

  async function handleSearch() {
    if (!input) {
      alert('Preencha algum cep válido')
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response)
    } catch {
      alert('error')
    }
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
