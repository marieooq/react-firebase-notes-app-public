    
import React, { Component } from 'react';
import './NoteForm.css';
import add from '../Static/img/add_button.png';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    //when the user input changes, set the newNoteContent
    //to the value of what's in the input box
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote(){
        this.props.addNote(this.state.newNoteContent);

        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" 
                placeholder="Write a new note..."
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}
                />
                <button className="noteButton"
                onClick={this.writeNote}><img src={add} alt="add" id="add" /></button>
            </div>
        )
    }
}

export default NoteForm;