import React from 'react';

const TodoListStateless=({items})=>(
    <div className="bloco-lista">
        <p>Minha lista TodoListStateless</p>
        <ul className="lista-estilizada">
            {items.map(item=><li>{item}</li>)}
        </ul>
    </div>
);

export default TodoListStateless;