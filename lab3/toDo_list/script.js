const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}

const tasks = [];
// console.log(dom)
// добавляем задачу 
// клик по кнопке Добавить задачу

dom.add.onclick = () =>{
    const newTaskText = dom.new.value
    if(newTaskText && isNotHaveTask(newTaskText, tasks)){ /*add is not empty*/ 
        addTask(newTaskText, tasks);
        dom.new.value = ''
        tasksRender(tasks)
        // console.log(tasks)

    }
}

// function to add task

function addTask(text, list){
    const timestamp = Date.now();
    const task ={
        id: timestamp,
        text,
        isFinished: false
    }
    list.push(task)
    // console.log(tasks)

}
// проверка на уникальность плана
function isNotHaveTask(text, list){
    let isNotHave = true

    list.forEach((task) => {
        if (task.text === text){
            alert('there is already such a plan')
            isNotHave = false
        }
    })

    return isNotHave
}

// show list of plan

function tasksRender(list){
    let htmlList=''

    list.forEach((task) =>{
        const cls= task.isFinished ? 'todo_task todo_task_finished' : 
                                    'todo_task'

        const checked = task.isFinished ? 'checked' : ''

        const taskHtml = `
        <div id="${task.id}" class="${cls}">
                    <label class="todo_checkbox">
                        <input type="checkbox" ${checked}>
                        <div class="todo_chechbox_div"></div>
                    </label>
                <div class="todo_task_text">${task.text}</div>
                <div class="todo_task_del">-</div>
                
                </div>
        `
     
        htmlList = htmlList + taskHtml
                
    })
    dom.tasks.innerHTML = htmlList /*генерация листа*/
}

// отслеживание клика по чекбоксу
dom.tasks.onclick = (event) =>{
    const target = event.target /*кликнутый бокс элемент*/
    // console.log(target)
    const isCheckBoxEl = target.classList.contains('todo_chechbox_div')
    if(isCheckBoxEl){
        const task = target.parentElement.parentElement
        const taskId = task.getAttribute('id')
        changeTaskSt(taskId,tasks)
        tasksRender(tasks)
         
    }
}

// изменение статуса задачи
function changeTaskSt(id, list){
    list.forEach((task) =>{
        if(task.id == id){
            task.isFinished = !task.isFinished
        }
    })
}
