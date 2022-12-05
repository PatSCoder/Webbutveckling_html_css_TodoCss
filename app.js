const inpt = document.querySelector('#input');
const addToArray = [];
let complete = 0;


const btn = document.querySelector('#btnTodo');

btn.addEventListener('click', function(){

  let inputUppgifter = inpt.value;

  if(inputUppgifter.length === 0)
  {
    const message = document.querySelector('#message').innerText = "input must not be empty";
    message.setAttribute('class', 'message');

    return;
    
  }
  else
  {
    // add inputUppgifter to array

    addToArray.push(inputUppgifter);

    const todo_list = document.querySelector(".listan");
    const element_li = document.createElement("li");
    todo_list.appendChild(element_li);

    const element_span = document.createElement("span"); 
    element_span.setAttribute('class', 'spanText');   
    element_span.innerText = inputUppgifter;
    element_li.appendChild(element_span);

    

    const etikett = document.querySelector('#completed');


    element_span.addEventListener('click', function(){

      if(element_li.getAttribute('class') == 'completed'){

        element_span.setAttribute('class', '');
        complete--;

      }
      else
      {
        element_span.setAttribute('class','completed');
        complete++;
      }

      etikett.innerHTML = complete + " completed";
    });

    // trashcan with image

    const papperskorg = document.createElement("span");
    papperskorg.innerHTML = "&#x1F5D1";
    papperskorg.setAttribute('class', 'papperskorg');
    element_li.appendChild(papperskorg); 
   
    papperskorg.addEventListener("click", function(){
     element_li.remove();
     complete--;
     etikett.innerHTML = complete + " completed"; 
     
    });
    

  }

  // clear

  document.querySelector("#message").innerText = "";
  input.value = "";


});