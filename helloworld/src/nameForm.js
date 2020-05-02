import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'ここに好きな値を入れる'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Sub" />
        </form>
          <label>
            Name:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Sub" />
        </form>
      );
    }
  }

  export default NameForm;