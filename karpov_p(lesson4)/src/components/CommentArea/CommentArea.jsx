import './CommentArea.css';

import React, {Component} from 'react';

import classNames from 'classnames';

import MessageItem from 'components/MessageItem';

class CommentArea extends Component {
    render() {
        const comAreaStyles = classNames('comment-area');

        const messageRend = this.props.message.map((item, idx) => {
            return (<MessageItem key={idx} text={item.text} type={item.type}/>)
            // return (<div key={idx}>{item}</div>)
            // return (<MessageItem className={messageStyles} key={idx} text={item} type='guest' />)
        });
        return(            
            <div className={comAreaStyles}>
                {messageRend}
                {/* {this.props.message} */}
                {/* <MessageItem 
                message={messages} 
                type='guest'
                /> */}
            </div>
        )
    }
}

export default CommentArea;