import { Component } from 'react';

class AddUser extends Component {
    state = {
        first: '',
        last: '',
        username: ''
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
            alert(`${this.state.username} exists.`);
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

export default AddUser;