import React from 'react';
import './ClassName.css'

//estilizando uma lista utilizando uma classe css

const ClassName =()=>(
    <div className="bloco-lista">
        <p>Minha lista ClassName</p>
        <ul className ="lista-estilizada">
            <li className="item-cor">Tomate</li>
            <li className="item-cor">Melancia</li>
            <li className="item-cor">Caqui</li>
            <li className="item-cor">Feijão</li>
            <li className="item-cor">Ameixa</li>
        </ul>
    </div>
);

export default ClassName;