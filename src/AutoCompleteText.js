import React, { Component } from 'react'
import './AutoCompleteText.css';
export default class AutoCompleteText extends Component {
    constructor (props) {
        super(props);

        this.state = {
            suggestions: [],
            text : ""
        }

    }
    onTextChange = (e) => {

        const value = e.target.value;
        if(value.length > 0) {
            const regex = new RegExp(`^${value}` , 'i');
            const suggestions = this.props.countryArr.sort().filter(item => regex.test(item));
            this.setState( ()=> ({suggestions, text: value}));
        
        } else {
            this.setState( () => ({
                suggestions: [],
                text: value
            }))
        }
    }

    suggestionSelected (value) {
        this.setState(()=> ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state
        if( suggestions.length === 0){
            return null;
        } else {
            return (
                <ul>

                   {suggestions.map((item)=> <li key={item} onClick={()=> this.suggestionSelected(item)}>{item}</li>)}
                   
                </ul>
            )
        }
    }

    render() {
        const {text } = this.state
        return (
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChange} type="text"/>
                {this.renderSuggestions()}
            </div>
        )
    }
}
