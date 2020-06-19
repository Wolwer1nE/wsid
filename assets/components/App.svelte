<script>
    export let name;
</script>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>


<div class="flex flex-col">
    <div class="text-center">
        <h1>Итак, вы не знаете, что делать, ведь дел слишком много.</h1>
        <h1>Давайте перечислим срочные дела.</h1>
    </div>
    <div class="mt-4 text-center">
        <input id='taskInput' class="shadow appearance-none border rounded w-1/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Мне срочно надо сделать...">
        <button id='willDo'
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick="addTask()">
            Сделаю!
        </button>
    </div>
</div>
