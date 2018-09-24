import React, { PureComponent } from 'react';

import Layout from 'components/Layout';

export default class LayoutContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }
    componentDidMount() {     
        return fetch('http://localhost:3000/comments')
        .then((response) => response.json())
        .then((comments) => {  
            comments.forEach((item, idx) => setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        messages: prevState.messages.concat([{text: item.body}]),
                    }                
                })
            }, 4000 * idx))             
        })   
    }

    updateData = (value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                messages: prevState.messages.concat([value]),
            }
        })        
    }   
    render() { 
        const { messages } = this.state;

        return (  
            <Layout messages={messages} updateData={this.updateData}/>     
        );
    }
}
