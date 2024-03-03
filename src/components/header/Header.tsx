import './header.scss'

const Header = () => {
    return (
        <div className='header'>
            <a href="/" className='header__logo'>
                <h1>Kino<span>VieW</span></h1>
            </a>
            <input placeholder='Search your movie...' type="text" />
        </div>
    )
}

export default Header