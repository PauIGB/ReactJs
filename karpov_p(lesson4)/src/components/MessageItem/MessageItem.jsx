import './MessageItem.css';

import React, {Component, Fragment} from 'react';

import classNames from 'classnames';

class MessageItem extends Component {
    render() {
        // const messageStyles = classNames('message', 'message-guest');
        const { message, type } = this.props;
        const messageStyles = classNames('message', {
            'message-guest': type === 'guest',
            'message-my': type === 'me',
        });
        const commentWrapStyles = classNames('comm-wrap', {
            'wrap-left': type === 'guest',
            'wrap-right': type === 'me',
        });
        
        const messageRend = this.props.message.map((item, idx) => {
            return (<div className={messageStyles} key={idx}>{item}</div>)
        });

        return(
            <div className={commentWrapStyles}>
                {messageRend}
            </div>            
        )
    }
}

export default MessageItem;