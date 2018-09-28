import './MessageItem.css';

import React, { Component, PureComponent } from 'react';

import classNames from 'classnames';

class MessageItem extends Component {
        
    render() {
        const{text, type} = this.props;
        const messageStyles = classNames('message',  {
            'message-guest': type === 'guest',
            'message-my': type === 'me',
        });
        const commentWrapStyles = classNames('comm-wrap', {
            'wrap-left': type === 'guest',
            'wrap-right': type === 'me',
        });             
        
        return(
            <div className={ commentWrapStyles }>
                <div className={ messageStyles }>{ text }</div>            
            </div>            
        )
    }
}

export default MessageItem;