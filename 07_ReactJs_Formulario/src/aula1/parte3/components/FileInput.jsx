import React from 'react';
class FileInput extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.FileInput= React.createRef();
    }
    handleSubmit(event){
        event.preventDefault();
        alert(
            `Arquivo selecionado - ${
                this.FileInput.current.files[0].name
            }`
        );
    }


render () {
    return(
        <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column'}}>
            <label>
                Upload de arquivo 
            </label>
        </form>
        )
    }
}