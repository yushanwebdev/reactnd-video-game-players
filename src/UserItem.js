import PropTypes from 'prop-types';

const UserItem = props => {
    return <li>{`${props.username} played ${props.count} games.`}</li>;
}

UserItem.PropTypes = {
    key: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    count: PropTypes.count.isRequired
}

export default UserItem;