import { Component } from "react";
import AddUser from "./AddUser";
import CountVisibilityBtn from "./CountVisibilityBtn";
import UserList from "./UserList";

class UserDetails extends Component {
    render() {
        return (
            <div>
                <AddUser />
                <UserList users={this.props.users} />
                <CountVisibilityBtn />
            </div>
        )
    }
}

export default UserDetails;