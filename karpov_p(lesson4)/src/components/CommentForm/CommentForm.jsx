import './CommentForm.css';

import React, {Component} from 'react';

import classNames from 'classnames';

import MessageItem from 'components/MessageItem';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    addComment = (event) => { 
        evt.preventDefault();    
        const inner = event.target.name === '' ? false : inner;
        this.setState((prevState) => {
            return (
                {
                    ...prevState,
                    text: inner,
                }
            
            )
        });
    }    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn');

        const { text } = this.state;

        return(
            <form action="#" className={formStyles}>
                <textarea name="textarea" onChange={this.handleChange} className={textareaStyles} placeholder="..." autoFocus></textarea>
                <input onClick={this.addComment} className={formbtnStyles} type="submit" />            
            </form>
        )
    }
}

export default CommentForm;