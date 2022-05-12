import React from 'react'
export default class ItensDoCarrinho extends React.Component {
	render() {
		return (
			<>
				<h3>{this.props.nome}</h3>
				<h3>{this.props.quantidade}0</h3>
				<button onClick={this.props.onClick}>Remover</button>
			</>
		)
	}
}
