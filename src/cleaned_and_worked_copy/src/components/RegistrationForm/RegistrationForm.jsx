import './RegistrationForm.css';

import React, { Component, PureComponent, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import classNames from 'classnames';

export default class RegistrationForm extends Component {
 
    render() {    
        const { isDisabled, onHandleChange, name_reg, onReg } = this.props;
        const regInputStyles = classNames('form-reg__input');
        const regSubStyles = classNames('form-reg__sub-btn', 
        {
            'form-reg__sub-btn--disabled': isDisabled === 'disabled',
            'form-reg__sub-btn--active': isDisabled === false,
        }
        );   
        return (  
            <Fragment>
                <h1 className="main-heading">Please enter your name</h1>
                <form className="form-reg" action="#">
                    <input className={regInputStyles} id="reg-input" type="text" name="name_reg" onChange={onHandleChange} placeholder="Ваше имя" value={name_reg} />
                    <button className={regSubStyles} id="reg-submit" onClick={onReg} disabled={isDisabled}><Link to="/chat" className="reg-link">Войти</Link></button>
                </form>
            </Fragment>
 
        );
    }
}
