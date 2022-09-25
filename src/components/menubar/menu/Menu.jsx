import "./menu.scss"
import { Person, Mail } from "@mui/icons-material";

export default function Menu({ menuOpen, setMenuOpen }) {

    const changeState = () => setMenuOpen(!menuOpen);

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={changeState}>Home</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={changeState}>Portifolio</a>
                </li>
                <li>
                    <a href="#works" onClick={changeState}>Works</a>
                </li>
                <li>
                    <a href="#testimonials" onClick={changeState}>Testimonials</a>
                </li>
                <li>
                    <a href="#contact" onClick={changeState}>Contact</a>
                </li>
            </ul>
            <div className="bottom">
                <div className="itemContainer">
                    <Person className='icon' />
                    <span>+44 924 12 74</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon' />
                    <span>safak@genius.com</span>
                </div>
            </div>

        </div>
    )
}