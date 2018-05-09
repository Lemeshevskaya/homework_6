var field = [];
var listTask = document.getElementById('list');
// add task
function addTask() {
    var newLi = document.createElement('li');
    var text = document.getElementById('task').value;
    newLi.className = 'item text_decoration';
    newLi.innerHTML = text;
     if (text.length === 0 || !text.trim()) {
        alert('enter the task!');
    } else {
        listTask.appendChild(newLi);
        field.push(text);
     }
    document.getElementById('task').value = '';
}

//clear list
function clearList () {
    var reallyDelete = confirm('do you really want to delete everything?');
    if (reallyDelete) {
        while (listTask.firstChild) {
            listTask.removeChild(listTask.firstChild)
        }
        field.length = 0;
        document.getElementById('task').value = '';
    }
}

//cross it out
function crossItOut (event) {
    event.target.classList.toggle('cross');
}

document.getElementById('button-add').addEventListener('click', addTask);
document.getElementById('button-clear').addEventListener('click', clearList);
document.getElementById('list').addEventListener('click',crossItOut);
