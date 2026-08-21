// ===============================
// TASK DATA
// ===============================

let tasks = [];


// ===============================
// HTML ELEMENTS
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");


// ===============================
// ADD TASK
// ===============================

function addTask() {

    const text = taskInput.value.trim();

    // Don't allow empty tasks
    if (text === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
}


// ===============================
// DELETE TASK
// ===============================

function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    renderTasks();
}


// ===============================
// TOGGLE TASK
// ===============================

function toggleTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    if (task) {
        task.completed = !task.completed;
    }

    renderTasks();
}


// ===============================
// RENDER TASKS
// ===============================

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const taskCard = document.createElement("li");

        taskCard.className = "task-card";
        taskCard.dataset.id = task.id;

        taskCard.innerHTML = `
            <span class="grip-handle">⠿</span>

            <input 
                type="checkbox" 
                class="task-checkbox"
                ${task.completed ? "checked" : ""}
            >

            <span class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <button class="delete-btn">Delete</button>
        `;

        // Checkbox
        const checkbox = taskCard.querySelector(".task-checkbox");

        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });


        // Delete button
        const deleteButton = taskCard.querySelector(".delete-btn");

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });


        taskList.appendChild(taskCard);
    });

    updateEmptyState();
}


// ===============================
// EMPTY STATE
// ===============================

function updateEmptyState() {

    if (tasks.length === 0) {
        emptyState.hidden = false;
    } else {
        emptyState.hidden = true;
    }
}


// ===============================
// ADD BUTTON
// ===============================

addTaskBtn.addEventListener("click", addTask);


// ===============================
// ENTER KEY
// ===============================

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});