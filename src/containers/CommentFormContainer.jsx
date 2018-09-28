import React, { Component, PureComponent } from 'react';

import CommentForm from 'components/CommentForm';

export default class CommentFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: 'me',
        };   
        this.isDisabled = "disabled";
    }
  
    addComment = (event) => {
            event.preventDefault(); 
            const{updateData} = this.props;       
            updateData(this.state);     
            document.querySelector('textarea').value = "";         
            this.setState({
                text: '',
            }); 
            this.isDisabled = "disabled";
    }     

    handleChange = (event) => {
        this.setState({        
            [event.target.name]: event.target.value,
        });
        if (event.target.value !== "" ) {
            this.isDisabled = false;     
   
        } else {           
            this.isDisabled = "disabled";
        }     
    }

    render() {
        const{ text } = this.state;

        return (  
            <CommentForm 
            onHandleChange={this.handleChange} 
            onAddComment={this.addComment} 
            text={text} 
            isDisabled={this.isDisabled} />       
        );
    }
}
