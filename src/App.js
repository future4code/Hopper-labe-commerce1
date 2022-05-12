import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Filtros } from './Components/Filtros';

// ESTILIZAÇÃO COM STYLED COMPONENTS

const Tela = styled.div `
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`
const FiltroCarrinhoArea = styled.div `
 border: 1px solid black;
 height: 30em;
 width: 15em;
 margin: 10px;
 text-align: center;
`
const ProdutosArea = styled.section`
  display:flex ;
  flex-direction: column;
`
const ContainerSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Produto = styled.div`
  border: 1px solid black;
  width: 18em;
  height: 25em;
  font-size: 15px;
  margin:2px;
  img{
  width: 18em;
  height: 12em;
}
p{
  margin: 1em;
}
button{
  margin: 0 6em;
}
`

function App() {
  return (
    <Tela>
      <FiltroArea>
        <Filtros/>
      </FiltroArea>
          <ProdutosArea>
        <ContainerSuperior>
          <p>Quantidade de produtos: </p>
          <select> Ordenação
            <option>Crescente</option>
            <option>Decrescente</option></select>
        </ContainerSuperior>
        <ContainerProdutos>
            <Produto>
              <img src='https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg'></img>
              <p>Título</p>
              <p>Preço</p>
              <button>Adicionar ao carrinho</button>
            </Produto>
            <Produto>
              <img src='https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg'></img>
              <p>Título</p>
              <p>Preço</p>
              <button>Adicionar ao carrinho</button>
            </Produto>
            
        </ContainerProdutos>
          </ProdutosArea>
          <FiltroCarrinhoArea>
            <h3> Carrinho:</h3>
          </FiltroCarrinhoArea>
    </Tela>
  );
}

export default App;
