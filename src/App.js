import React from 'react';
import './App.css';
import styled from 'styled-components'
import  Filtros  from './Components/Filtros';
import ProdutoItem from './Components/Produto';
import { render } from '@testing-library/react';


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
      <FiltroCarrinhoArea>
        <Filtros/>
      </FiltroCarrinhoArea>
          <ProdutosArea>
        <ContainerSuperior>
          <p>Quantidade de produtos: </p>
          <select> Ordenação
            <option>Crescente</option>
            <option>Decrescente</option></select>
        </ContainerSuperior>
        <ContainerProdutos>
            <Produto>
              <ProdutoItem link="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"  título= "Blusa" preco= "29,90"/>
            
            </Produto>
            <Produto>
              <ProdutoItem link="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"  título= "Brinquedo" preco= "129,90"/>
            
            </Produto>
            <Produto>
              <ProdutoItem link="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"  título= "Lanterna" preco= "19,90"/>
            
            </Produto>
            <Produto>
              <ProdutoItem link="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"  título= "Nave Espacial" preco= "298.007,90"/>
            
            </Produto>
            <Produto>
              <ProdutoItem link="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"  título= "Capacete" preco= "99,90"/>
            
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
