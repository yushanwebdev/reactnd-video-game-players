const UserItem = props => {
    return <li>{`${props.username} played ${props.count} games`}</li>;
}

export default UserItem;