import React from 'react';

class Signup extends React.Component {
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
      .then(() => this.props.history.push('/chirps'));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        
        <form>
          <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')} /></label>
          <label>Email: 
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput('email')} /></label>
          <label>Password: 
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')} />
          <button onClick={this.handleSubmit}>Sign Up!</button></label>
        </form>
      </div>
    )
  }
}

export default Signup;
