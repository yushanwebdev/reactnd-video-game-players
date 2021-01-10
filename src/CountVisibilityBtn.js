const CountVisibilityBtn = props => {
    const onBtnClick = e => {
        props.changeCountVisiblity();
    }

    return <button onClick={onBtnClick}>{props.showCount ? `Hide the Number of Games Played` : `Show the Number of Games Played`}</button>;
}

export default CountVisibilityBtn;