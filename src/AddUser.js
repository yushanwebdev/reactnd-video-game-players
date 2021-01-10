import { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        user: {
            first: '',
            last: '',
            username: '',
        },
        userExists: false,
    }

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }

    addUser = e => {
        e.preventDefault();
        if (!this.props.checkUserNameExists(this.state.user.username)) {
            this.props.updateUsersList(this.state.user);
            
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
        const { first, last, username } = this.state.user;
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
                        name="first"
                        id="first-name"
                        onChange={this.handleInputChange}
                        value={first}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last"
                        id="last-name"
                        onChange={this.handleInputChange}
                        value={last}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={this.handleInputChange}
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

AddUser.propTypes = {
    updateUsersList: PropTypes.func.isRequired,
    checkUserNameExists: PropTypes.func.isRequired
}

export default AddUser;