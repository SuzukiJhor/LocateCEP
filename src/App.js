import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './styles.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function handleSearch() {
    if (!input) {
      alert('Preencha algum cep válido')
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response)
      setCep(response.data)
    } catch {
      alert('error')
      setInput("")
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
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2> CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
          <span>DDD: {cep.ddd}</span>
        </main>
      )}


    </div>
  );
}

export default App;
