import 'normalize.css';
import './Layout.css';

import React, { Component, PureComponent, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'containers/CommentFormContainer';
import MessageItem from 'containers/MessageItemContainer';
import routes from '../../../routes';

class Layout extends Component {

    render() {
        const { messages, updateData } = this.props;

        return(
            <Fragment>
                <h1 className="main-heading" >Welcome to chat!</h1>
                <div className="wrapper">
                    <Link to="/comments">Home</Link>
                    <Switch>
                       
                        <Route path='/comments' component={CommentArea} message={messages} render = { props } exact/>
                    </Switch>
                    {/* <CommentArea message={messages} />                     */}
                    <CommentForm updateData={updateData} />  
                </div>
            </Fragment>
        )
    }
}

export default Layout;