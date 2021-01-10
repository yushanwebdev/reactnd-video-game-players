import { Component } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

class UserDetails extends Component {
    state = {
        users: []
    }

    updateUsersList = ({ first, last, username }) => {
        this.setState(prevState => {
            const length = prevState.users.length;
            return length !== 0 ?
                {
                    users: prevState.users.concat({
                        id: length+1,
                        first: first,
                        last: last,
                        username: username,
                        count: 0
                    })
                } :
                {
                    users: [
                        {
                            id: length+1,
                            first: first,
                            last: last,
                            username: username,
                            count: 0
                        }
                    ]
                }
        })
    }

    checkUserNameExists = username => (
        this.state.users.find(user => (
            user.username === username
        ))
    ) 

    render() {
        return (
            <div className="user-details">
                <AddUser updateUsersList={this.updateUsersList} checkUserNameExists={this.checkUserNameExists} />
                <UserList users={this.state.users} />
            </div>
        )
    }
}

export default UserDetails;