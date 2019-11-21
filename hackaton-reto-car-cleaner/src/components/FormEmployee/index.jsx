import React from "react";
import {Input} from '../';
import Button from '../Button/index'
import "./style.css";

const FormEmployee = (props) => {
    const {
        nameEmployee, 
        emailEmployee,
        phoneEmployee,
        passwordEmployee,
        confirmPasswordEmployee,
        handleChangeName,
        handleChangeEmail,
        handleChangePhone,
        handleChangePassword,
        handleChangeConfirmPassword
        } = props;
    return (
        <form className="form-employee">
            <Input
                type="text"
                name="name"
                placeholder="Nombre"
                value={nameEmployee}
                onChange={handleChangeName}
            />
            <Input
                type="text"
                name="email"
                placeholder="Correo electrónico"
                value={emailEmployee}
                onChange={handleChangeEmail}
            />
            <Input
                type="number"
                name="phone"
                placeholder="Teléfono"
                value={phoneEmployee}
                onChange={handleChangePhone}
            />
             <Input
                type="password"
                name="password"
                placeholder="Crear contraseña"
                value={passwordEmployee}
                onChange={handleChangePassword}
            />
             <Input
                type="password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
                value={confirmPasswordEmployee}
                onChange={ handleChangeConfirmPassword}
            />
            <Button text = "SIGUIENTE"/>          
        </form>
    )

}

export default FormEmployee;