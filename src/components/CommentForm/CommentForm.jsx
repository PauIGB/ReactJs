import './CommentForm.css';

import React, {Component} from 'react';

import classNames from 'classnames';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: 'me',
        };   
        this.isDisabled = "disabled";
    }
  
    addComment = (event) => {
        let promise = new Promise((resolve) => {
            event.preventDefault(); 
            const{updateData} = this.props;       
            updateData(this.state);     
            document.querySelector('textarea').value = "";         
            this.setState({
                text: '',
            }); 
            this.isDisabled = "disabled"; 
            resolve()
        })      
       
        promise.then( () => {
            const commArea = document.querySelector('.comment-area');
            commArea.scrollTo({
                top: commArea.scrollHeight,
                behavior: 'smooth'
            })
        });   
    }     

    handleChange = (event) => {
        this.setState({    
            //name Должно совпадать с value        
            [event.target.name]: event.target.value,
        });
        if (event.target.value !== "" ) {
            this.isDisabled = false;     
   
        } else {           
            this.isDisabled = "disabled";
        }     
    }
    
    render() {
        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn', {
            'form__sub-btn--disabled': this.isDisabled === "disabled",
            'form__sub-btn--active': this.isDisabled === false,
        });

        const{text} = this.state;

        return(
            <form action="#" className={formStyles}>
                <textarea name="text" onChange={this.handleChange} className={textareaStyles} placeholder="..." value={text} autoFocus></textarea>
                <input onClick={this.addComment} className={formbtnStyles} type="submit" disabled={this.isDisabled} /> 
                          
            </form>
        )
    }
}

export default CommentForm;