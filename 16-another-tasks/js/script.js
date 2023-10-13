'use strict';

const ToDoList = {
  id: 0,
  tasks: [],

  addTask(task) {
    this.id++;

    if (!task.id) {
      task.id = this.id;
    }
  
    this.tasks.push(task);
  },

  delTask(id) {
    let tmpTL = this.tasks.filter(el => el.id !== id );
    this.tasks = tmpTL;
  },

  updateTask(id, key, value) {
    this.tasks.forEach(el => {
      if (el.id === id) {
        el[key] = value;
      }
    });
  },

  sortByKey(key = 'priority') {
    this.tasks.sort((a, b) => a[key] - b[key]);
  },

  print() {
    console.log(`В вашем списке задач: ${this.tasks.length}`);
    Object.values(this.tasks).forEach(el => console.log(el));
  }
}


const newTask = {
  tasks: [
    {
      id: 1,
      name: 'test',
      description: 'описание',
      order: 0
    }
  ]
}

ToDoList.addTask({title: 'Помыть посуду', priority: 2});
ToDoList.addTask({title: 'Сделать домашнюю работу', priority: 8});
ToDoList.addTask({title: 'Сделать влажную уборку', priority: 4});
ToDoList.addTask({title: 'Сдать скрипт на код ревью)', priority: 1});
ToDoList.addTask({title: 'Изучить mdn', priority: 7});
ToDoList.print();

ToDoList.delTask(3);
ToDoList.print();

ToDoList.delTask(3);
ToDoList.print();

ToDoList.delTask(1);
ToDoList.print();

ToDoList.sortByKey();
ToDoList.print();

ToDoList.updateTask(2, 'priority', 5);
ToDoList.updateTask(2, 'title', 'Заменить в пульте батарейки');
ToDoList.updateTask(5, 'title', 'Изучить JS + HTML + CSS');
ToDoList.print();

newTask.id = 1;
newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.printTask = ToDoList.print.bind(newTask);
newTask.sortByKey = ToDoList.sortByKey.bind(newTask);
newTask.delTask = ToDoList.delTask.bind(newTask);
newTask.updateTask = ToDoList.updateTask.bind(newTask);


newTask.addTask({ name: 'test1', description: 'Задача 1', order: 3 });
newTask.addTask({ name: 'test2', description: 'Задача 2', order: 1 });
newTask.addTask({ name: 'test3', description: 'Задача 3', order: 2 });
newTask.printTask();

newTask.sortByKey('order');
newTask.printTask();

newTask.delTask(3);
newTask.printTask();

newTask.updateTask(1, 'name', 'updated');
newTask.updateTask(1, 'order', 10);
newTask.printTask();