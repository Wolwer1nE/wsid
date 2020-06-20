<script>
    export let name;
    export let nextTask = ''
    export let tasks = []

    function addTask() {
        tasks = [...tasks, nextTask]
        nextTask = ''
    }
</script>
<div class="flex flex-col">
    <div class="text-center">
        <h1>Итак, вы не знаете, что делать, ведь дел слишком много.</h1>
        <h1>Давайте перечислим срочные дела.</h1>
    </div>
    <div class="text-center">
        {tasks.join(', ')}
    </div>
    <div class="mt-4 text-center">
        <input id='taskInput' class="shadow appearance-none border rounded w-1/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               bind:value = {nextTask} type="text" placeholder="Мне срочно надо сделать...">
        <button id='willDo'
                class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" on:click={addTask}>
            Не Сделаю Никогда!
        </button>
    </div>
</div>
