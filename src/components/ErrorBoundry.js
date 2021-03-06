import React, { Componet } from 'react';

class ErrorBoundry entends Componet {
	constructor(props){
		super(props);
		this.state= {
			hasError: false
		}
	}

	componentDidCatch( error, info) {
		this.setState({ hasError: true })

	}

	render() {
		if (this.state.hasError) {
			return <h1> Opoops. That is not good </h1>
		} 
		return this.props.children
	}
}

export default ErrorBoundry;