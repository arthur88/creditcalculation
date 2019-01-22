import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';
import axios from 'axios';

export default class About extends Component{

    constructor (props) {
        super(props);
        this.state = {uname: '', surname: '', mail: '', status: '', userdata: [] }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    async componentDidMount() 
    {
        axios
     .get('http://localhost:8081/')
     .then(({ data })=> {
       this.setState(
         { userdata: data[0] }
       );
     })
     .catch((err)=> {})
    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }


    handleSubmit(event) {

        let formIsValid = true;
        let errors = {};

        if(!this.state.uname || !this.state.surname || !this.state.mail) 
        {
            formIsValid = false;
            errors = 'Cannot be empty';
        }
        else if(!this.state.uname.match(/^[a-zA-Z]+$/) || !this.state.surname.match(/^[a-zA-Z]+$/))
        {
            formIsValid = false;
            errors = 'Only letters';
        }
        else
        {

        }


        if(formIsValid === false)
        {
            alert( errors);
        }
        else
        {
            axios.post('http://localhost:8081/', {     
                uname: this.state.uname,
                surname: this.state.surname, 
                mail: this.state.mail 
            }).then(res => {
              /* console.log(res);
                console.log(res.data); */
                axios
                .get('http://localhost:8081/')
                .then(({ data })=> {
                  this.setState(
                    { userdata: data[0] }
                  );
                })


            })

        }
        
        event.preventDefault();

    }

      
    render() {
     
        let udata;
        if(this.state.userdata == null){
            udata = ( <li>No Data</li> )
        } else {
            udata =  (  <ul className="userProfileData">
            <li><label>Your name:</label><span>{ this.state.userdata.uname || '' }</span></li>
            <li><label>Your surname:</label><span>{ this.state.userdata.surname || '' }</span></li>
            <li><label>Your email:</label><span>{ this.state.userdata.mail || '' }</span></li>
            </ul>)
        }


        return (
            isAuthenticated() ? (

                <div className="wrapper_user">
             
                    <h2>User profile</h2> 
                    <p>Fill below fields to change your info</p>
                    <div className="w50">
                    <form onSubmit={this.handleSubmit}>
                    <label><span>First name:</span>
                        <input name="uname" type="text" onChange={this.handleChange('uname')} />
                    </label>
                    <label><span>Last name:</span>
                        <input name="surname" type="text"  onChange={this.handleChange('surname')} />
                    </label>
                    <label><span>Email:</span>
                        <input name="mail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange('mail')} />
                    </label>
                    <label>
                        <input type="submit" value="Save" />
                    </label>
                    </form>
                    </div>
                    <div className="w50">
                    <ul className="userProfileData">
                        { udata }
                    </ul>
                    </div>
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

