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
        addTask(newTaskText);
        dom.new.value = ''
    }
}

// function to add task

function addTask(text){
    const timestamp = Date.now();
    const task ={
        id: timestamp,
        text,
        isFinished: false
    }
    tasks.push(task)
    // console.log(tasks)

}
// проверка на уникальность плана
function isNotHaveTask(text, list){
    let isNotHave = true

    list.forEach((task) => {
        if (task.text == text){
            alert('there is already such a plan')
            isNotHave = false
        }
    })

    return isNotHave
}
