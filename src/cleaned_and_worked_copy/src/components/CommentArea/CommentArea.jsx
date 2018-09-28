import './CommentArea.css';

import React, { Component, PureComponent } from 'react';

class CommentArea extends Component {

    render() {      
        const { messageRend } = this.props;

        return(            
            <div className="comment-area">
                {messageRend} 
            </div>
        )
    }
}

export default CommentArea;
