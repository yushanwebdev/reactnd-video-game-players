import PropTypes from 'prop-types';

const CountVisibilityBtn = props => {
    const onBtnClick = e => {
        props.changeCountVisiblity();
    }

    return <button onClick={onBtnClick}>{props.showCount ? `Hide the Number of Games Played` : `Show the Number of Games Played`}</button>;
}

CountVisibilityBtn.PropTypes = {
    showCount: PropTypes.bool.isRequired,
    changeCountVisiblity: PropTypes.func.isRequired
}

export default CountVisibilityBtn;