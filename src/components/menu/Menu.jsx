import "./menu.scss"

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
        </div>
    )
}