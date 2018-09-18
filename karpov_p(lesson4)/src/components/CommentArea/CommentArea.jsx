import './CommentArea.css';

import React, {Component} from 'react';

import classNames from 'classnames';

import MessageItem from 'components/MessageItem';
let messages =  ["What's up man how R U", "YO, MAN WAZUP", "WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZUP!!!!!"];

class CommentArea extends Component {
    render() {
        const comAreaStyles = classNames('comment-area');
        return(            
            <div className={comAreaStyles}>
                <MessageItem 
                message={messages} 
                type='guest'
                />
            </div>
        )
    }
}

export default CommentArea;