import React, {useState} from 'react';

const TodoListFuncional =()=>{
    const [items, setItems]= useState(['Tomate', 'Alface', 'Melancia']);
    const addItem =(item)=>{
        setItems([...items,item]);
    }

    const removeItem =()=>{
        setItems([...items.slice(1)])
    }

    return(
        <div className="bloco-lista">
            <p>Minha Lista</p>
            <ul className="lista-estilizada">
                {items.map(item=> <li>{item}</li>)}
            </ul>
            <button onClick ={()=> addItem('Abóbora')}>Add Item</button>
            <button onClick ={()=>removeItem()}>Remover Item</button>
        </div>
    );
}

export default TodoListFuncional;