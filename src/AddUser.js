import React, { Component } from 'react';
import UserFields from './UserFields';

class AddUser extends Component {
    render() {
        return(
            <form>
                <UserFields />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default AddUser;