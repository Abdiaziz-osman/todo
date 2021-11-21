

function todolist(){
    const inputelement = document.querySelector('input');
    const value = inputelement.value;
   
    const todocontainer = document.createElement('div');
    todocontainer.className='flex justify-between items-center ';

    const todotile = document.createElement('h4');
    todotile.textContent = value;

    const donebutton = document.createElement('button');
    donebutton.className ='bg-green-500 p-2 rounded-lg';

    donebutton.textContent = 'Done';
    todocontainer.appendChild(todotile);

    todocontainer.appendChild(donebutton);
    const alltodoscontainer = document.querySelector('#todoscontainer');

    alltodoscontainer.appendChild(todocontainer);
};