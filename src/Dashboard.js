import { Component } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

class Dashboard extends Component {
    state = {
        users: []
    }

    updateUsersList = (user) => {
        user.count = 0;
        this.setState(prevState => ({
            users: [...prevState.users, user],
        }));
    }

    checkUserNameExists = username => (
        this.state.users.find(user => (
            user.username === username
        ))
    )

    render() {
        return (
            <div className="dashboard">
                <AddUser updateUsersList={this.updateUsersList} checkUserNameExists={this.checkUserNameExists} />
                <UserList users={this.state.users} />
            </div>
        )
    }
}

export default Dashboard;