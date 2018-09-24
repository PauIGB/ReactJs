import './CommentForm.css';

import React, {PureComponent} from 'react';

import classNames from 'classnames';

class CommentForm extends PureComponent {
    render() {
        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn', {
            'form__sub-btn--disabled': this.isDisabled === "disabled",
            'form__sub-btn--active': this.isDisabled === false,
        });

        const { text, onHandleChange, onAddComment } = this.props;

        return(
            <form action="#" className={formStyles}>
                <textarea name="text" onChange={onHandleChange} className={textareaStyles} placeholder="..." value={text} autoFocus></textarea>
                <input onClick={onAddComment} className={formbtnStyles} type="submit" disabled={this.isDisabled} />                          
            </form>
        )
    }
}

export default CommentForm;