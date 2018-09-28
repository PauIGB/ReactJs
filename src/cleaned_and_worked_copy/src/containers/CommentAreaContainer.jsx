import React, { Component } from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer'

export default class CommentAreaContainer extends Component {

    render() { 
        const { comments } = this.props;
        const messageRend = comments.map((comment, idx) => {
            return (<MessageItem key={idx} text={comment.body} type={comment.type} />)         
        });      
        return (  
            <CommentArea messageRend={messageRend} />       
        );
    }
}
