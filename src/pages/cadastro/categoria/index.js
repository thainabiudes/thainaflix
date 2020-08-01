import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button, { WrapperButton } from '../../../components/Button/styles';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://thainaflix.herokuapp.com/categorias'

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);
    addCategory();
    clearForm();
  }

  function addCategory(){
    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(async (response) => {
      const resposta = await response;
      if(resposta.status === 201) {
        console.log('deu');
      };
    });
  }
  
  useEffect(() => {
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1 style={{ alignItens: 'center' }}>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          input={true}
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
          label="Nome da Categoria:"
        />

        <FormField
          input={false}
          value={values.descricao}
          onChange={handleChange}
          type="text"
          name="descricao"
          label="Descrição:"
        />

        <FormField
          input={true}
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor:"
        />

        <WrapperButton>
          <Button style={{ background: "#141414", width: "143px" }} >
            Cadastrar
          </Button>
        </WrapperButton>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>
      <WrapperButton>
        <Button as={Link} to="/" style={{ marginBottom: "25px" }}>
          Ir para home
        </Button>
      </WrapperButton>
    </PageDefault>
  );
}

export default CadastroCategoria;