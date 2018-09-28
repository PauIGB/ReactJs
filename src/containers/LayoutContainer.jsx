import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Layout from 'components/Layout';

export default class LayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }
    componentDidMount() { 
       
        return fetch('http://localhost:3001/comments/2')
        //   return fetch(`http://localhost:3001/${match.params.id}`)
        .then((response) => response.json())
        .then((comments) => {  
            comments.body.forEach((item, idx) => 
            // setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        messages: prevState.messages.concat([{text: item.text}]),
                    }                
                })
            // }, 4000 * idx)
            );             
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
            <div>
                <Layout messages={messages} updateData={this.updateData}/>  
            </div>
        );
    }
}
