import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArchive, faArrowAltCircleUp, faArrowCircleUp, faBars, faBell, faHouse, faMartiniGlass, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {

    return (
        <div className='sidebar'>
            <span>
                <FontAwesomeIcon icon={faHouse} width={32} height={32} color="white" />
                <p>Inicio</p>
            </span>
            <span>
                <FontAwesomeIcon icon={faBell} width={32} height={32} color="white" />
                <p>Shorts</p>
            </span>
            <span>
                <FontAwesomeIcon icon={faArchive} width={32} height={32} color="white" />
                <p>inscrições</p>
            </span>
            <span>
                <FontAwesomeIcon icon={faUser} width={32} height={32} color="white" />
                <p>Você</p>
            </span>
        </div>
    );
}
export default Sidebar;