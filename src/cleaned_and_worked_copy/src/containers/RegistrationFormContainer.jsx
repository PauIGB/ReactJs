import React, { Component, PureComponent } from 'react';

import RegistrationForm from 'components/RegistrationForm';

export default class RegistrationFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_reg: '',
            isDisabled: 'disabled',                       
        };   
    }

    handleChange = (event) => {
        this.setState({        
            [event.target.name]: event.target.value,
        });
        (event.target.value !== "" ) ? this.setState({isDisabled: false}) : this.setState({isDisabled: 'disabled'});              
    }
    
    reg = (event) => {
        const { onGetApi } = this.props;              
        const { name_reg } = this.state;    
        onGetApi('profile', 'POST', {"name": name_reg}); 
        event.preventDefault();  
    }

    render() {  
        const { isDisabled, name_reg } = this.state;
        const { onBtnDisabled } = this.props;
       
        return (  
            <RegistrationForm 
            isDisabled={isDisabled} 
            name_reg={name_reg}
            onHandleChange={this.handleChange}         
            onReg={this.reg} />       
        );
    }
}
