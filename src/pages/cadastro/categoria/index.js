import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button, { WrapperButton } from '../../../components/Button/styles';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave,value){
    setValues({
      ...values,
      [chave]: value, 
    })
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);
    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1 style={{ alignItens: 'center'}}>
        Cadastro de Categoria: 
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          input={true}
          value={values.nome} 
          onChange={handleChange}
          type="text" 
          name="nome"
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
      
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
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