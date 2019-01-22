import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

export default class Credit extends Component{

    constructor (props) {
        super(props);
        this.state = {initial_capital: '', duration: '', rate: '', out_totmoney: '', out_total: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    handleSubmit(event) {
        var data = {
            initial_capital: parseInt(this.state.initial_capital),
            duration: parseInt(this.state.duration),
            rate: this.state.rate
        }

        var response =  (data.rate * (data.duration * 30)) * 100
       var out_total = (data.initial_capital * response) / 100 
    
 
        this.setState({  
            out_total:  response.toFixed(2) + '%',
            out_totmoney: out_total.toFixed(2) + '$',
        })

        event.preventDefault();
    }

    render() {
        return (
            isAuthenticated() ? (
                <div id="credit_calculation">
                    <h2>Credit Calculation page</h2>
                    <p>
                    <form onSubmit={this.handleSubmit}>
                <label><span>Initial capital ($):</span>
                    <input name="initial_capital" type="number" max="999999999" value={this.state.initial_capital} onChange={this.handleChange('initial_capital')} />
                </label>
                <label>
                <span>Credit duration in month:</span>
                    <input type="number" name="duration" max="99999" value={this.state.duration} onChange={this.handleChange('duration')} />
                </label>
                <label><span>Daily rate (%):</span> 
                <input type="number" step="0.000001" name="rate" value={this.state.rate} onChange={this.handleChange('rate')} />
                </label>
                <label>
                    <input type="submit" value="Calculate" />
                </label>
            </form>
                <div id="results">
                    <p>
                    <label>Total percentage: <span>{ this.state.out_total }</span></label>
                    <label>Interest: <span>{ this.state.out_totmoney }</span></label>
                    </p>
                
                </div>
                 </p>
                </div>

            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { form: this.props.location }
                }} />
            )
 
        )
    }
}
