/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.list = [];
  }

  add(todo){
    this.list.push(todo);
  }

  remove(index){
    this.list.splice(index, 1)
  }

  clear(){
    this.list = [];
  }

  getAll(){
    return this.list;
  }

  get(index){

    let n = this.list.length;

    if(index > n-1){
      return null;
    }
    return this.list[index];
  }

  update(index, string){
    let n = this.list.length;

    if(index > n-1){
      return null;
    }

    this.list.splice(index, 1, string);

  }

}

module.exports = Todo;
