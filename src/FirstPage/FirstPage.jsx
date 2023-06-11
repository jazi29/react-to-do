import './FirstPage.css';
import { Link } from 'react-router-dom';

function FirstPage(){
    return(
        <div className="container-first">
        <h1 className='h1-first'>
            ZhaSa
        </h1>
        <p className='first-p'>
            Жұмыстарды оңай басқару
        </p>
        <a href="/second">
            <button className='letsgo'>
                Кеттік!
            </button>
        </a>
    </div>
    )
}

export default FirstPage;