function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
     // get the text
    let title = newToDoText.value;
    // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');

   let removeLi = document.createElement("Button");

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   // set the inputs type to button//
   removeLi.type = "button";

   // set the title
   newLi.textContent = title;
   removeLi.textContent = "Delete";

   // attach the checkbox to the li
   newLi.appendChild(checkbox);
   newLi.appendChild(removeLi);

   // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
  }
window.onload = function() {
      onReady();
 };
