import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import api from './services/api';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');


  async function handleSearch() {
    if (!input) {
      toast.warning("Preencha algum CEP válido");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
    } catch (error) {
      toast.error('Erro ao buscar CEP');
      if (error.response) {
        toast.error(`Erro: ${error.response.status} - ${error.response.data.message}`);
      }
      setInput('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="buttonSearch" type='submit'>
            <FiSearch size={25} color="#FFF" />
          </button>
        </div>
      </form>
      <ToastContainer
        closeOnClick
        theme="dark"
      />

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
