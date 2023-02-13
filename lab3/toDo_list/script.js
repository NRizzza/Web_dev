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
    const task = dom.new.value
    if(task){ /*add is not empty*/ 
        addTask()
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

    
}
