import "./Header.scss"
import HdrLogo from "../Image/CofeLogo.svg"

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="header__link" href="#link">
                        <img src={HdrLogo} alt="HeaderLogo"/>
                    </a>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a className="nav__link" href="#link">Home</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="#link">About us</a>
                            </li>

                            <li className="nav__item">
                                <a className="nav__link" href="#link">Create your plan</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header