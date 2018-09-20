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
        
        this.props.updateData(this.state);      
        document.querySelector('textarea').value = "";  
        this.setState({
            text: '',
        });   
        event.preventDefault();
    }    

    handleChange = (event) => {
        const messageRegEx = /^\s*$/;
        const testMsg = messageRegEx.test(event.target.value);
        console.log(testMsg);
        console.log(event.target.value);
        debugger
        if (testMsg === false && event.target.value !== "") {
            this.setState({
                text: event.target.value,
            });
            this.isDisabled = false;
        } else {
            setState(this.isDisabled = "disabled");
        }
     
   
        // const inner = event.target.name === 'aa' ? 'aa' : inner;
        // this.setState((prevState) => {
        //     return (
        //         {
        //             ...prevState,
        //             text: inner,
        //         }            
        //     )
        // });
    }

    render() {
        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn', {
            'form__sub-btn--disabled': this.isDisabled === "disabled",
            'form__sub-btn--active': this.isDisabled === false,
        });
        const { text } = this.state;        

        return(
            <form action="#" className={formStyles}>
                <textarea name="textarea" onChange={this.handleChange} className={textareaStyles} placeholder="..." autoFocus></textarea>
                <input id="click" onClick={this.addComment} className={formbtnStyles} type="submit" disabled={this.isDisabled} />            
            </form>
        )
    }
}

export default CommentForm;