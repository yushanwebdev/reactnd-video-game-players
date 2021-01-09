import React, { Component } from 'react';

class UserFields extends Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="first-name">First Name:</label>
                <input type="text" name="first-name" id="first-name" />
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" name="last-name" id="last-name" />
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" />    
            </React.Fragment>
        )
    }
}

export default UserFields;