let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function() {
    let task = document.getElementById("taskInput").value
    let priority = document.getElementById("priority").value
    let li = document.createElement("li")
    li.innerText = task + " (" + priority + ")"
    li.dataset.status = "pending"
    let completeBtn = document.createElement("button")
    completeBtn.innerText = "Complete"
    completeBtn.addEventListener("click", function() {
        li.style.textDecoration = "line-through"
        li.dataset.status = "completed"
    })
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener("click", function() {
        li.remove()
    })
    li.appendChild(completeBtn)
    li.appendChild(deleteBtn)
    document.getElementById("taskList").appendChild(li)
})
document.getElementById("all").addEventListener("click", function() {
    let tasks = document.querySelectorAll("#taskList li")
    tasks.forEach(function(t) {
        t.style.display = "list-item"
    })
})
document.getElementById("completed").addEventListener("click", function() {
    let tasks = document.querySelectorAll("#taskList li")
    tasks.forEach(function(t) {
        if (t.dataset.status == "completed") {
            t.style.display = "list-item"
        } else {
            t.style.display = "none"
        }
    })
})
document.getElementById("pending").addEventListener("click", function() {
    let tasks = document.querySelectorAll("#taskList li")
    tasks.forEach(function(t) {
        if (t.dataset.status == "pending") {
            t.style.display = "list-item"
        } else {
            t.style.display = "none"
        }
    })
})
