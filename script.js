// ===============================
// TASK DATA
// ===============================

let tasks = [];
let currentFilter = "all";


// ===============================
// HTML ELEMENTS
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");


// ===============================
// STORAGE
// ===============================

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
        tasks = [];
        return;
    }

    try {
        const parsedTasks = JSON.parse(savedTasks);
        tasks = Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch (error) {
        tasks = [];
    }
}


// ===============================
// FILTERS
// ===============================

function getFilteredTasks() {
    if (currentFilter === "active") {
        return tasks.filter(function(task) {
            return !task.completed;
        });
    }

    if (currentFilter === "completed") {
        return tasks.filter(function(task) {
            return task.completed;
        });
    }

    return tasks;
}


function updateFilterButtons() {
    filterButtons.forEach(function(button) {
        const isActive = button.dataset.filter === currentFilter;
        button.classList.toggle("active", isActive);
    });
}


function updateFilterCounts() {
    const total = tasks.length;
    const active = tasks.filter(function(task) {
        return !task.completed;
    }).length;
    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    const badgeMap = {
        all: total,
        active: active,
        completed: completed
    };

    filterButtons.forEach(function(button) {
        const badge = button.querySelector(".count-badge");
        const filterName = button.dataset.filter;

        if (badge) {
            badge.textContent = badgeMap[filterName];
        }
    });
}


// ===============================
// ADD TASK
// ===============================

function addTask() {
    const text = taskInput.value.trim();

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
    saveTasks();
    renderTasks();
}


// ===============================
// DELETE TASK
// ===============================

function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();
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
        saveTasks();
    }

    renderTasks();
}


// ===============================
// RENDER TASKS
// ===============================

function renderTasks() {
    const filteredTasks = getFilteredTasks();

    taskList.innerHTML = "";

    filteredTasks.forEach(function(task) {
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

        const checkbox = taskCard.querySelector(".task-checkbox");
        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });

        const deleteButton = taskCard.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        taskList.appendChild(taskCard);
    });

    updateEmptyState(filteredTasks.length);
    updateFilterButtons();
    updateFilterCounts();
}


// ===============================
// EMPTY STATE
// ===============================

function updateEmptyState(filteredCount) {
    if (tasks.length === 0 || filteredCount === 0) {
        emptyState.hidden = false;
    } else {
        emptyState.hidden = true;
    }
}


// ===============================
// EVENT LISTENERS
// ===============================

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});


// ===============================
// INITIALIZE
// ===============================

loadTasks();
renderTasks();