import React from 'react';
import ReactDOM from 'react-dom';
import './formPractice.css';

class ContactForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {strMessage: '', strFirstName: '', strLastName: '', strCompanyName: '', strEmail:'', strPassword: '', chkRefer:'', strContactNo:'', strCompanyDesc:'', dpdwnQueryType:'Select an option'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.printMessage = this.printMessage.bind(this);
    }

    handleChange (e)
    {
        //let name = e.target.name;
        //let value = e.target.value;

        if(e.target.name === "strContactNo")
        {
            if (!Number(e.target.value)) 
            {
                alert('Please enter a valid phone number.');
            }
        }
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e)
    {       
            let message = 'Success';
            this.setState({strMessage: message});
            this.printMessage();
            e.preventDefault();
    }

    printMessage()
    {
        return(
            <div id="message">
                <h2>{this.state.strMessage}</h2>
            </div>
        );
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <fieldset id="nameElement">            
                <div id="formElements">  
                    <label id="textLabel"> 
                        First Name: 
                    </label>
                        <input id="inputField" name="strFirstName" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div id="formElements">
                    <label id="textLabel"> 
                        Last Name: 
                    </label>
                        <input id="inputField" name="strLastName" type="text" value={this.state.value} onChange={this.handleChange} />  
                </div>
                <div id="formElements">
                    <label id="textLabel"> 
                        Company Name: 
                    </label>
                        <input id="inputField" name="strCompanyName" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div id="formElements">
                    <label id="textLabel"> 
                        Email id: 
                    </label>
                        <input id="inputField" name="strEmail" type="email" value={this.state.value} onChange={this.handleChange} />
                </div>    
                <div id="formElements">
                    <label id="textLabel"> 
                        Contact Number: 
                    </label>
                        <input id="inputField" name="strContactNo" type="tel" value={this.state.value} onChange={this.handleChange} />  
                </div>
                <div id="formElements">
                    <label id="textLabel">
                        Company Description:
                    </label>
                    <textarea id="textarea" name="strCompanyDesc" rows="10" cols="30"></textarea>
                </div>
                <div id="submitButton">
                    <input id="button" type="submit" value="Submit" />
                </div>
                </fieldset>
            </form>
        );
        
    }
}

ReactDOM.render(
    <ContactForm />,
    document.getElementById('form')
);