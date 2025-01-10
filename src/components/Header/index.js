import './header.css';

const Header = () => {

    return (
        <header className="header">
            <h1>React Table</h1>
            <div className="user-info">
                <img src="https://github.com/ricardo-oamaro.png" alt="User" className="user-avatar" />
            </div>
        </header>
    );
}

export default Header;