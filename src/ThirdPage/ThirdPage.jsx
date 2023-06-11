import Header from '../Header/Header';
import './ThirdPage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ThirdPage() {
    useEffect(() => {
        function ThirdPageScript() {
            let input = document.querySelector('input');
            document.querySelector('#button1').onclick = function() {
                if (document.querySelector('input').value.length === 0) {
                    alert("Please Enter Your Task");
                } else {
                    const taskName = document.querySelector('input').value;
                    localStorage.setItem("taskName", taskName);
                    window.location.href = "/second";
                }
            }
        }
        ThirdPageScript();
    }, []);

    return(
        <div className="container-third">
            <Header />
            <div className="content-third">
                <div className="text-content">
                    <h3 className="new-task-third">
                        Жаңа тапсырма
                    </h3>
                </div>
                <form id="my-form">
                    <input type="text" placeholder="Тақырып" className="input-third" id="my-input"/>
                </form>
                <div className="buttons-third" id="buttons">
                    <form>
                        <input type="button" value="Қосу" id="button1"/>
                    </form>
                    <Link to="/second">
                        <button id="button2">
                            Қоспау
                        </button>
                    </Link>
                </div>
            </div>
        </div> 
    )
}

export default ThirdPage;
