import React, { Component } from 'react';
import axios from 'axios/index';

class Chatbot extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    async df_text_query(text) {
        let says = {
            speaks: 'me',
            msg: {
                test: {
                    text: text
                }
            }
        };
        this.setState({messages: [...this.state.messages, says]})
        const res = await axios.post('/df/df_text_query', {text: text})

        for (let msg of res.data.fullfillmentMessages) {
            says = {
                speaks: 'bot', 
                msg: msg
            }
            this.setState({messages: [...this.state.messages, says]})
        }

    }

    async df_event_query(event){

    }

    render() {
        return (
            <div style = {{height: 400, width:400, float: 'right'}} >
                <div id='charbot' style = {{ height: '100%', width: '100%', overflow: 'auto'}}>
                    <h2>chatbot</h2>
                    <input type='text'/>
                </div>
            </div>
        )
    }
}

export default Chatbot;