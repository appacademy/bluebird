import React from 'react';

class NewSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.setState({
        username: "",
        email: "",
        password: ""
      }));
  }

  render() {
    // console.log(this.props);
    return (
      <form>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleInput('username')} />
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleInput('email')} />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleInput('password')} />
        <button onClick={this.handleSubmit}>Sign Up!</button>
      </form>
    )
  }
}

export default NewSession;
