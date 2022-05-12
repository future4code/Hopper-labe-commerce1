import React from 'react'
import CarrinhoAlan from './CarrinhoAlan/CarrinhoAlan'

class App extends React.Component() {
	state = {
		//parte do carrinho no estado
		carrinho: [],
		valorTotalAPagar: 0,
	}
	//logica do carrinho
	adicionandoCoisasNoCarrinho = (produtos) => {
		const Carrinho = this.state.carrinho.filter((item) => {
			if (item.id === produtos.id) {
				return item
			} else {
				return false
			}
		})
		if (Carrinho.length === 0) {
			produtos.quantidade = 1
			const CarrinhoComProdutos = [...this.state.carrinho, produtos]
			this.setState({
				carrinho: CarrinhoComProdutos,
			})
		} else {
			const carrinhoComProdutos = this.state.carrinho.map((item) => {
				if (item.id === produtos.id) {
					return { ...item, quantidade: item.quantidade + 1 }
				} else {
					return item
				}
			})
			this.setState({ carrinho: carrinhoComProdutos })
		}
		this.adicionaValorTotalAPagar(produtos.preco)
	}
	removerProdutoDoCarrinho = (produtoRemovido) => {
		if (produtoRemovido.quantidade > 1) {
			const carrinhoComProdutos = this.state.carrinho.map((item) => {
				if (item.id !== produtoRemovido.id) {
					return item
				} else {
					return false
				}
			})
			this.setState({ carrinho: carrinhoComProdutos })
		} else {
			const carrinhoComProduto = this.state.carrinho.map((item) => {
				if (produtoRemovido.id === item.id && item.quantidade === 1) {
					return {
						...item,
						quantida: item.quantidade - 1,
					}
				} else {
					return item
				}
			})
			this.setState({ carrinho: carrinhoComProduto })
		}
	}
	adicionaValorTotalAPagar = (valor) => {
		this.setState({
			valorTotalAPagar: this.state.valorTotalAPagar + valor,
		})
	}
	removerValorTotalAPagar = (valor) => {
		this.setState({
			valorTotalAPagar: this.state.valorTotalAPagar - valor,
		})
	}

	render() {
		return <></>
	}
}

export default App
