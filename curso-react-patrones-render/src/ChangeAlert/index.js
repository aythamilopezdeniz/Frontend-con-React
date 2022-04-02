import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ syncronize }) {
    const { show, toggleShow } = useStorageListener(syncronize);

    if (show) {
        return(
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que se han realizado cambios en los TODOs en otra pestaña o ventana del nagegador.</p>
                    <p>¿Deseas sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}>
                            Si
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };