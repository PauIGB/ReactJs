import React, { PureComponent } from 'react';

import CompanionItem from 'components/CompanionItem';

export default class CompanionItemContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }  
    render() {    
        const { text, id, activeId } = this.props;   
        return (  
            <CompanionItem text={text} id={id} activeId={activeId} />       
        );
    }
}
