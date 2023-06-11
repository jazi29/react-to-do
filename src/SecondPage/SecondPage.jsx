import Header from '../Header/Header';
import './SecondPage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function SecondPage(){
  useEffect(() => {
    function SecondPageScript(){
      const taskName = localStorage.getItem("taskName");
      if (taskName) {
        document.querySelector('#tasknew').innerHTML += `
          <div class="task-second">
          <form action="#">
          <input type="checkbox" id="vehicle1" name="vehicle1" />
          <div>
              <label htmlFor="vehicle1">${taskName}</label>
          </div>
        </form>
        <div className="line-second"></div>
        <a class="delete">
        <img src="Images/trash.svg" alt="trash"/>
        </a>
          </div>
        `;
      }
      const deleteButtons = document.querySelectorAll(".delete");
      for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function() {
          this.parentNode.remove();
        }
      }
    }
    SecondPageScript();
  }, []);


  return(
    <div className="container-second">
      <Header />
      <div className="main-container">
        <div className="main-header">
          <div>
            <a href="#">
              <div className="button-plus">
                <p className='plus'>+</p>
              </div>
            </a>
            <div className="new-task">
              <a href="/third">
                Жаңа тапсырма қосу
              </a>
            </div>
          </div>
        </div>
        <div className="content-second">
            {/* <div className="task-second">
                        <form action="#">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <div>
                                <label htmlFor="vehicle1">Morning walk</label>
                            </div>
                          </form>
                          <div className="line-second"></div>
                          <a class="delete">
                          <img src="Images/trash.svg" alt="trash"/>
                          </a>
                    </div> */}
          <div id="tasknew"></div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage;
