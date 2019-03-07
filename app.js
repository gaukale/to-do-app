function onReady() {

  let id = 0;
  let toDos = [];                                                    //state is array of to-dos//
  const addToDoForm = document.getElementById('addToDoForm');               //access the HTML form//


  function createNewToDo() {                                         //to create new to-dos. we added this function//

  const newToDoText = document.getElementById('newToDoText');       //access the text input,to get the text for the title of each to-do//
  if (!newToDoText.value) { return; }                              // to prevent adding empty to-dos by executing a return if newToDoText is falsy
  toDos.push({                                                    //add the new to-do to the toDos array using the push() method//
      title: newToDoText.value,                                   //assign the value of the text input, newToDoText to the title key.//
      complete: false,                                            //key called complete and initialize it to false//
      id: id++
  });

  newToDoText.value = '';                                         //clear the text input for the user//
  renderTheUI();                                                 //call renderTheUI() each time the state changes//
}

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
                                                                       //before the  forEach() function, set newLi to an empty string//
    toDos.forEach(function(toDo) {                                    //Using forEach method will render each to-do as a li in the ul//

      const newLi = document.createElement('li');                     //create the li and checkbox//
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;                                 //add the toDo's title text to newLi//
      let removeLi = document.createElement("Button");
      removeLi.textContent = "Delete" ;
      removeLi.addEventListener('click', event => {                 //dd the event listener, using the submit event of the form element//
          toDos = toDos.filter(function(item){
           return item.id != toDo.id;
          });
       renderTheUI();
     });

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(removeLi);
    });

  }
  addToDoForm.addEventListener('submit', event => {                 //dd the event listener, using the submit event of the form element//
  event.preventDefault();
  createNewToDo();                                                 //then call the function//
  });

  renderTheUI();
}

window.onload = function() {
        onReady();
};
