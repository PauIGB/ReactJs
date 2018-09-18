import './MessageItem.css';

import React, {Component, Fragment} from 'react';

import classNames from 'classnames';

class MessageItem extends Component {
    render() {
        const messageStyles = classNames('message', 'message-guest');
        
        const messageRend = this.props.message.map((item, idx) => {
            return (<div className={messageStyles} key={idx}>{item}</div>)
        });

        return(
            <Fragment>
                {messageRend}
            </Fragment>            
        )
    }
}

export default MessageItem;