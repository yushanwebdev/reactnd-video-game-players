import PropTypes from 'prop-types';

const UserItem = props => {
    return <li>{`${props.username} played ${props.count} games.`}</li>;
}

UserItem.propTypes = {
    username: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}

export default UserItem;