import 'normalize.css';
import './Layout.css';

import React, {PureComponent, Fragment} from 'react';

import classNames from 'classnames';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'components/CommentForm';

class Layout extends PureComponent {

    render() {
        const wrapperStyles = classNames('wrapper');
        const headingStyles = classNames('main-heading');

        const { messages, updateData } = this.props;

        return(
            <Fragment>
                <h1 className={headingStyles} >Welcome to chat!</h1>
                <div className={wrapperStyles}>
                    <CommentArea message={messages} />
                    <CommentForm updateData={updateData} />  
                </div>
            </Fragment>
        )
    }
}

export default Layout;