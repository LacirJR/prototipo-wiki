
import './header.css'

const Logo = () => {

    return (
        <>
        <img src=''></img>
        <span className='logoText'>PrototipoWiki</span>
        </>
    )
}

const Pesquisar = () => {

    return (
        <input className='searchHeader' type={'text'} value="Pesquisar..."/>
    )
}

const MenuToggler = () => {

    return (
        <>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
            </label>

            <ul className="menu__box">
            <li><a className="menu__item" href="#">Home</a></li>
            <li><a className="menu__item" href="#">About</a></li>
            <li><a className="menu__item" href="#">Team</a></li>
            <li><a className="menu__item" href="#">Contact</a></li>
            <li><a className="menu__item" href="#">Twitter</a></li>
            </ul>
        </>

    )
}


export const Header = () => {


    return (
        <header className="header">
            <Logo/>
            <Pesquisar/>
            <MenuToggler/>
        </header>
    )
}