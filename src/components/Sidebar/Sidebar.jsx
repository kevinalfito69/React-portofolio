import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/kevintekno.png'
import LogoSub from '../../assets/images/sub_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSub} alt="logoSub" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/about"
                    className="about-link"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/contact"
                    className="contact-link "
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="norefrrer" href="">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />{' '}
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="norefrrer" href="">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />{' '}
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="norefrrer" href="">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />{' '}
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
