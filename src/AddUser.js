import { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        first: '',
        last: '',
        username: '',
        userExists: false
    }

    onFirstChange = e => {
        this.setState(prevState => ({
            first: this.validatedVal(e.target.value)
        }))
    }

    onLastChange = e => {
        this.setState(prevState => ({
            last: this.validatedVal(e.target.value)
        }))
    }

    onUserNameChange = e => {
        this.setState(prevState => ({
            username: this.validatedVal(e.target.value)
        }))
    }

    addUser = e => {
        e.preventDefault();
        if (!this.props.checkUserNameExists(this.state.username)) {
            this.props.updateUsersList(this.state);
            this.setState(prevState => ({
                first: '',
                last: '',
                username: ''
            }));
        } else {
            this.setState(prevState => ({
                userExists: true
            }));
        }
    }

    checkSubmitEligiblity = ({ first, last, username }) => (
        !(first !== '' && last !== '' && username !== '')
    )

    validatedVal = input => (
        input !== '' ? input.trim() : ''
    )

    render() {
        const { first, last, username } = this.state;
        return (
            <form onSubmit={this.addUser}>
                {this.state.userExists ? (
                    <p className="error">You cannot add a user that already exists.</p>
                ) : (
                    ''
                )}
                <div className="form-control">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        onChange={this.onFirstChange}
                        value={first}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        onChange={this.onLastChange}
                        value={last}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={this.onUserNameChange}
                        value={username}
                    />
                </div>
                <button
                    type="submit"
                    disabled={this.checkSubmitEligiblity(this.state)}
                >Add</button>
            </form>
        )
    }
}

AddUser.PropTypes = {
    updateUsersList: PropTypes.func.isRequired,
    checkUserNameExists: PropTypes.func.isRequired
}

export default AddUser;