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
        event.preventDefault();
    }    

    handleChange = (event) => {
        
        this.setState({
            text: event.target.value,
        });
        // () => document.getElementById('click').disabled = false;
     
        // document.getElementById('click').removeAttribute('disabled');    
      

        // this.setState.text = event;
        // /^\s*$/
        this.isDisabled = false;
        console.log(this.state)
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
        const formbtnStyles = classNames('form__sub-btn');
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