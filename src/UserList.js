import { Component } from "react";
import PropTypes from 'prop-types';
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
        const { users } = this.props;
        return (
            <div>
                <h2>Users</h2>
                <ol>
                    {
                        users.map(user => (
                            this.state.showCount ? 
                            <UserItem key={user.id} username={user.username} count={user.count} /> 
                            : <UserItem key={user.id} username={user.username} count='*' />
                        ))
                    }
                </ol>
                {
                    users.length ? 
                    '' 
                    : <CountVisibilityBtn showCount={this.state.showCount}  changeCountVisiblity={this.changeCountVisiblity} />
                }
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;