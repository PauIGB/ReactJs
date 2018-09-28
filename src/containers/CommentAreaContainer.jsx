
import React, { Component, PureComponent } from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer';

export default class CommentAreaContainer extends Component {

    render() { 
        const messageRend = this.props.message.map((item, idx) => {
            return (<MessageItem key={idx} text={item.text} type={item.type}/>)         
        });      
        return (  
            <CommentArea messageRend={messageRend} />       
        );
    }
}
