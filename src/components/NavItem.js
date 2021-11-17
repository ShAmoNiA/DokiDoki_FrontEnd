import './style/navItem.css'

export default function (props) {
    return (
        <li className="nav-item">
            <i className={props.icon}></i>
            <span>{props.name}</span>
        </li>
    );
};