import { Component } from "react";
import CountVisibilityBtn from "./CountVisibilityBtn";
import UserItem from "./UserItem";


class UserList extends Component {
    state = {
        showCount: true
    }

    changeCountVisiblity = () => {
        this.setState(prevState => ({
            showCount: !prevState.showCount
        }))
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <ol>
                    {
                        this.props.users.map(user => (
                            this.state.showCount ? <UserItem key={user.id} username={user.username} count={user.count} /> : <UserItem key={user.id} username={user.username} count='\*' />
                        ))
                    }
                </ol>
                <CountVisibilityBtn showCount={this.state.showCount}  changeCountVisiblity={this.changeCountVisiblity} />
            </div>
        )
    }
}

export default UserList;