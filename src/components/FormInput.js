import React, { Component } from 'react';

export default class FormInput extends Component {
  constructor(props){
    super(props)
    this.state={
      type: this.props.type || 'text'
    }
  }
  render(){
    return(
      <div className='form-group'>
        <label
          htmlFor={this.props.name}
          className='control-label'
        >
          {this.props.label}
        </label>
        <input
          type={this.state.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          className='form-control'
        />
      </div>
    )
  }
}
