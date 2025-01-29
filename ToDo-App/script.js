document.addEventListener('DOMContentLoaded', () => {

    //UI elements
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const prioritySelect = document.getElementById('prioritySelect');
    const dueDateInput = document.getElementById('dueDate');
    const dueTimeInput = document.getElementById('dueTime');

    //load saved task to page
    loadTasks();

    //add task
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            let capitalText = taskInput.value.charAt(0).toUpperCase() + taskInput.value.slice(1);
            addTask(capitalText, prioritySelect.value, dueDateInput.value. dueTimeInput.value);
        }
    });

    //press Enter to add new task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    //add new task to list
    function addTask(text, priority, dueDate, dueTime) {
        const li = document.createElement('li');
        li.classList.add(priority);
        li.setAttribute('draggable', true);
        
        //add task content
        li.innerHTML = `
            <span class="checkbox"></span>
            <span>${text} (${dueDate || 'No Due Date'} ${dueTime || ''}))</span>
            <button class="delete-btn">❌</button>
        `;

        //append task to list
        taskList.appendChild(li);
        saveTask(text, priority, dueDate, dueTime);

        //task completion toggle
        li.querySelector('.checkbox').addEventListener('click', () => {
            li.classList.toggle('completed');
            toggleTaskCompletion(text);
        });

        //delete task
        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
            deleteTask(text);
            saveTaskOrder();
        });

        // Drag & Drop functionality
        li.addEventListener('dragstart', () => li.classList.add('dragging'));
        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
            saveTaskOrder();
        });

        //clear input after adding
        taskInput.value = '';
        dueDateInput.value = '';
        dueTimeInput.value = '';

        saveTaskOrder();
    }

    //save task to localStorage
    function saveTask(text, priority, dueDate, dueTime) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text, priority, dueDate, dueTime, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTask(task.text, task.priority, task.dueDate, task.dueTime);
            if (task.completed) {
                let taskElement = [...taskList.children].find(li => li.innerText.includes(task.text));
                if (taskElement) taskElement.classList.add('completed');
            }
        });
    }

    //delete task from localStorage
    function deleteTask(text) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== text);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //save task order after drag and drop
    function saveTaskOrder() {
        let tasks = [];
        document.querySelectorAll('#taskList li').forEach(li => {
            let text = li.querySelector('span').textContent.split(' (')[0];
            let taskData = JSON.parse(localStorage.getItem('tasks')) || [];
            let taskObj = taskData.find(task => task.text === text);
            if (taskObj) tasks.push(taskObj);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTaskCompletion(text) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            if (task.text === text) {
                task.completed = !task.completed;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //drag & drop logic
    taskList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingItem = document.querySelectorAll('.dragging');
        const afterElement = getDragAfterElement(taskList, e.clientY);
        if (afterElement == null) {
            taskList.appendChild(draggingItem);
        } else {
            taskList.insertBefore(draggingItem, afterElement);
        }
    });

    //determine where to place dragged item
    function getDragAfterElement(container, y) {
        const draggableElement = [...container.querySelectorAll('li:not(.dragging)')];

        return draggableElement.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});

