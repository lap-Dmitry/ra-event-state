export default function IconSwitch(props) {
    const { icon, onSwitch } = props;

    return (
        <div className='icon_switch__btn'>
            <i className={'material-icons'} onClick={() => onSwitch(icon)}>
                {icon}
            </i>
        </div>
    );
}
