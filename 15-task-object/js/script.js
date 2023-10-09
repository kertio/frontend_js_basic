'use strict';

/*
    Написать объект ToDoList, который хранит в себе задачи
    {
        title: 'Помыть посуду',
        id: 1,
        priority: 1
    }
    и имеет методы:
    - добавить задачу
    - удалить задачу по id
    - обновить имя или приоритет по id
    - отсортировать задачи по приоритету
*/

const ToDoList = {
    id: 0,
    taskList: [],

    addTask({title, priority}) {
        this.id++;
        this.taskList.push({
            id: this.id, 
            title,
            priority
        });
    },

    delTask(id) {
        let tmpTL = this.taskList.filter(el => el.id !== id );
        this.taskList = tmpTL;
    },

    updateTask(id, {title: title, priority: priority}) {
        this.taskList.forEach(el => {
            if (el.id === id) {
                if (title) {
                    el.title = title;   
                }

                if (priority) {
                    el.priority = priority;
                }
            }
        })
    },

    sortByPriority() {
        this.taskList.sort((a, b) => a.priority - b.priority);
    },

    print() {
        console.log(`В вашем списке задач: ${this.taskList.length}`)
        console.log(Object.entries(taskList));

        this.taskList.forEach(el => 
            console.log(`id: ${el.id}, task: ${el.title}, priority: ${el.priority}`));
        console.log('\n')
    }
}

const taskList = ToDoList;

taskList.addTask({title: 'Помыть посуду', priority: 2});
taskList.addTask({title: 'Сделать домашнюю работу', priority: 8});
taskList.addTask({title: 'Сделать влажную уборку', priority: 4});
taskList.addTask({title: 'Сдать скрипт на код ревью)', priority: 1});
taskList.addTask({title: 'Изучить mdn', priority: 7});
taskList.print();

taskList.delTask(3);
taskList.print();

taskList.delTask(3);
taskList.print();

taskList.delTask(1);
taskList.print();

taskList.sortByPriority();
taskList.print();

taskList.updateTask(2, {priority: 5});
taskList.updateTask(2, {title: 'Заменить в пульте батарейки'});
taskList.updateTask(5, {title: 'Изучить JS + HTML + CSS', priority: 1});
taskList.print();
