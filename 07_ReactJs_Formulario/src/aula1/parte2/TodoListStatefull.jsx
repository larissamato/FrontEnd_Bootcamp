import React, {Component} from 'react';

class TodoListStatefull extends Component{
    constructor(props){
        super(props);
        this.state ={
            items:[
                'TOMATE',
                'ALFACE',
                'MELANCIA'
            ]
        }
    }


addItem =(item)=>{
    this.setState({items: [...this.state.items, item]});
    /*
    [...this.state.items.slice(1)] é o mesmo que:
    let itemsUpdated = this.state.items;
    itemsUpdated.pop();
    this.setState({ items: itemsUpdated }); 
    */
}
removeItem =()=>{
    this.setState({items: [...this.state.items.slice(1)]})
      /*
    [...this.state.items.slice(1)] é o mesmo que:
    let itemsUpdated = this.state.items;
    itemsUpdated.pop();
    this.setState({ items: itemsUpdated }); 
    */
}

render () {
    const {items} =this.state;
    return(
        <div className="bloco-lista">
            <p>Minha lista ClassName</p>
            <ul className="lista-estilizada">
                {items.map(item=><li>{item}</li>)}
            </ul>
            <button onClick={()=>this.addItem('Beterraba')}>Adicionar Item</button>
            <button onClick={()=>this.removeItem()}>Remover Item</button>
        </div>
        )
    }
}

