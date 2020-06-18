document.addEventListener("DOMContentLoaded", function(event) {
    const willDo = document.getElementById("willDo");
    const taskInput = document.getElementById("taskInput");
    const taskContainer = document.getElementById("taskInput");

    willDo.onclick = function() {
        const task = taskInput.value
        if (task)
        {
            alert(task)
        }

    };

    function addTask(text)
    {
        taskContainer
    }

});