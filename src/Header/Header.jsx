import './Header.css'

function Header(){
    return(
        <header>
        <div className="greet">
            <img src="Images/person.svg" alt="person" />
            <div className="greet-txt">
                <h3 className='greet-h3'>
                    Сәлем, Ербол 👋🏽
                </h3>
                <p className='greet-p'>
                    1 тапсырма бар
                </p>
            </div>
        </div>
            <h2 className='greet-h2'>
                ZhaSa
            </h2>
            <div className="exit">
                <a href="/">
                    Шығу
                </a>
            </div>
    </header>
    )
}

export default Header;