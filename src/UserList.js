import { Component } from "react";

class UserList extends Component {
    render() {
        return(
            <div>
                <ol>
                    {
                        this.props.users.map((user) => (
                            <li key={user.id}>{`${user.username} played ${user.count} games.`}</li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default UserList;