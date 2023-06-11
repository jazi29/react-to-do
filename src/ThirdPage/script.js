function ThirdPageScript(){
  let input = document.querySelector('input');
  document.querySelector('#button1').onclick = function() {
      if (document.querySelector('input').value.length == 0) {
          alert("Please Enter Your Task");
      } else {
          const taskName = document.querySelector('input').value;
          localStorage.setItem("taskName", taskName);
          window.location.href = "/second";
      }
  }
}

export default ThirdPageScript;
