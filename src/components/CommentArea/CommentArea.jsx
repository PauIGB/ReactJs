import './CommentArea.css';

import React, { PureComponent } from 'react';

import classNames from 'classnames';

class CommentArea extends PureComponent {

    render() {
        const comAreaStyles = classNames('comment-area');
        
        const { messageRend } = this.props;

        return(            
            <div className={ comAreaStyles }>
                { messageRend } 
            </div>
        )
    }
}

export default CommentArea;