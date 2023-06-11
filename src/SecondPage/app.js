function SecondPageScript(){
  window.onload = function() {
    const taskName = localStorage.getItem("taskName");
    if (taskName) {
      document.querySelector('#tasknew').innerHTML += `
      <div class="task">
        <form action="#">
          <input type="checkbox" id="vehicle1">
          <div>
            <label>
            ${taskName}
            </label>
          </div>
        </form>
        <a class="delete">
          <img src="icons/trash.svg" alt="trash">
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

}

export default SecondPageScript;