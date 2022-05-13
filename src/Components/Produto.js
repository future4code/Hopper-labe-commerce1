import React from "react";

function ProdutoItem (props){
    return(
            <><img src={props.link} alt= ""></img>
            <p>Título: {props.título}</p>
            <p>Preço: {props.preco}</p>
            <button>Adicionar ao carrinho</button></>
)}

export default ProdutoItem;