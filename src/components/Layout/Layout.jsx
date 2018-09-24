import 'normalize.css';
import './Layout.css';

import React, {PureComponent, Fragment} from 'react';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'containers/CommentFormContainer';

class Layout extends PureComponent {

    render() {
        const { messages, updateData } = this.props;

        return(
            <Fragment>
                <h1 className="main-heading" >Welcome to chat!</h1>
                <div className="wrapper">
                    <CommentArea message={messages} />
                    <CommentForm updateData={updateData} />  
                </div>
            </Fragment>
        )
    }
}

export default Layout;