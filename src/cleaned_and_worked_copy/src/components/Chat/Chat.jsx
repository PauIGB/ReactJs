import './Chat.css';

import React, { Component, PureComponent, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import СompanionsList from 'containers/СompanionsListContainer';
import Dummy from 'components/Dummy';
import StartDialog from 'containers/StartDialogContainer';

export default class Chat extends Component {
 
    render() {      
        const { res, onUpdateId, id } = this.props;
        return (  
           <Fragment>
               <h1 className="main-heading">Welcome to chat, dear {res}</h1>
               <СompanionsList activeId={id} />
               <Switch>
                    <Route path="/chat/" component={Dummy} exact/>
                    {/* <Route path="/chat/:id" render=<CommentArea onUpdateId={onUpdateId}> exact/> */}
                    <Route path="/chat/:id" render={({match}) => <StartDialog onUpdateId={onUpdateId} match={match} exact />} />
                    {/* <Route path="/chat/:id" component={StartDialog} exact/> */}
               </Switch>
           </Fragment>
        );
    }
}
