let data = {
    todo: [],
    completed : []
};



document.getElementById('add').addEventListener('click',function () {
    let value = document.getElementById('item').value;
    if(value){
    addItemTodo(value);
    document.getElementById('item').value = '';
        data.todo.push(value);
        console.log(data)
    }
});
function removeItem(){
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  data.todo.pop(item);
  parent.removeChild(item);

}
function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let target = (id == 'todo')?document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item)

    target.insertBefore(item,target.childNodes[0]);
}





function addItemTodo(text) {
    let list = document.getElementById('todo')

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')

    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.innerHTML = 'X'
    remove.addEventListener('click',removeItem)

    let complete = document.createElement('button')
    complete.classList.add('complete')
    complete.innerHTML = 'D'
    complete.addEventListener('click',completeItem)


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item,list.childNodes[0])
}