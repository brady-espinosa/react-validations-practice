import React, { Component } from 'react';
import Header from './components/Header'
import FormInput from './components/FormInput'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      registration: {
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
  }

  handleChange(event){
    const target = event.target
    const registration = this.state.registration
    registration[target.name] = target.value
    this.setState({
      registration: registration
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.registration)
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6 col-xs-offset-3'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <h3>Registration</h3>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                          name='firstName'
                          label='First Name'
                          value={this.state.registration.firstName}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                          name='lastName'
                          label='Last Name'
                          value={this.state.registration.lastName}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                          name='email'
                          label='Email'
                          value={this.state.registration.email}
                          onChange={this.handleChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                        type='password'
                        name="password"
                        label='Password'
                        value={this.state.registration.password}
                        onChange={this.handleChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <input className='btn btn-primary' type='submit' value='Submit' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className="col-xs-4 col-xs-offset-4">
            <ul className='list-group'>
              <li className='list-group-item'>First Name: {this.state.registration.firstName}</li>
              <li className='list-group-item'>Last Name: {this.state.registration.lastName}</li>
              <li className='list-group-item'>Email: {this.state.registration.email}</li>
              <li className='list-group-item'>Password: {this.state.registration.password}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
