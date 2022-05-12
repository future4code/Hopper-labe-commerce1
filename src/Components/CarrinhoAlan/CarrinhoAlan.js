import React from 'react'
import ItensDoCarrinho from './ItensDoCarrinho/ItensDoCarrinho'
import styled from 'styled-components'

export default class Carrinho extends React.Component {
	render() {
		const itensQueTemNoCarrinho =
			this.props.carrinho &&
			this.props.carrinho.map((item) => {
				return (
					<ItensDoCarrinho
						key={item.id}
						nome={item.nome}
						quantidade={item.quantidade}
						onClick={() => this.props.removerItem(item.id)}
					/>
				)
			})
		return (
			<>
				<div>
					<h1>Seu Carrinho</h1>
					<div>{itensQueTemNoCarrinho}</div>
					<p>Valor total a pagar: R${this.props.valorTotalAPagar}</p>
				</div>
			</>
		)
	}
}
