<script>
    import Card from "./Card.svelte";

    Array.prototype.random = function () {
        return this[Math.floor((Math.random() * this.length))];
    }

    export let name;
    export let nextTask = ''
    export let tasks = []
    export let selection = 0
    export let taskA = ''
    export let taskB = ''
    let winners = []
    let winner = null
    const colors = ['blue', 'red', 'indigo', 'green'];
    let lastColor = ''

    function addTask() {
        if (nextTask.length > 0) {
            tasks = [...tasks, nextTask]
            nextTask = ''
        }

    }

    function startSelection() {
        selection = true
        let i = randomIndex(tasks.length)
        taskA = tasks[i]
        tasks.splice(i, 1)
        i = randomIndex(tasks.length)
        taskB = tasks[i]
        tasks.splice(i, 1)
    }

    const onSelected = (task) => {
        if (winners.length === 0 && tasks.length === 0)
        {
            winner = task;
            return
        }

        winners.push(task)
        switch (tasks.length) {
            case 0:
                tasks = winners;
                winners = [];
                break
            case 1:
                winners.push(tasks[0])
                tasks = winners;
                winners = [];
                break
        }
        let i = randomIndex(tasks.length)
        taskA = tasks[i]
        tasks.splice(i, 1)
        i = randomIndex(tasks.length)
        taskB = tasks[i]
        tasks.splice(i, 1)
    }

    function getColor(intensity = 200) {
        lastColor = colors.filter(e => e !== lastColor).random()
        return `bg-${lastColor}-${intensity}`
    }

    function getIdea() {
        return ['Позвонить родителям', 'Помыть голову', 'Подготовиться к экзамену',
            'Подкачать пресс', 'Выучить английский',
            'Полить цветы'].random()
    }
    function randomIndex(n) {
        return Math.floor((Math.random() * n))
    }

</script>
{#if winner != null}
    <div class="flex flex-auto justify-center">
        <div class="flex flex-col w-5/6 md:w-1/2 text-center">
            <h1 class="text-2xl md:text-xl">Вам определенно нужно </h1>
            <h1 class="text-2xl md:text-xl text-indigo-800"> {winner}.</h1>
        </div>
    </div>
{:else}
    <div class="flex flex-auto justify-center">
        <div class="flex flex-col w-5/6 md:w-1/2 text-center">
            {#if !selection}
                <div class="text-center">
                    <h1 class="text-2xl md:text-xl"> Итак, вы не знаете, что делать, ведь дел слишком много.</h1>
                    <h1 class="text-2xl md:text-xl"> Давайте перечислим срочные дела.</h1>
                </div>
                <div class=" flex-col text-center ">
                    {#each tasks as task}
                        <span class="text-2xl md:text-xl w-full md:w-1/2  inline-block mt-4 border-2 {getColor()} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {task}
         </span>
                    {/each}
                </div>
                <div class="mt-4 text-center sm:flex-col">
                    <input id='taskInput'
                           class="shadow appearance-none border rounded text-2xl md:text-xl w-full sm:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           bind:value={nextTask}
                           type="text"
                           placeholder={getIdea()}>
                    <button id='willDo'
                            class="mt-4 text-2xl md:text-xl w-full sm:w-1/2 bg-blue-800 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full"
                            on:click={addTask}>
                        Добавить дело
                    </button>
                </div>
                {#if tasks.length > 1}
                    <div class="mt-4 text-center  sm:flex-col">
                        <button id='startSelection'
                                class="sm:text-xl text-2xl  w-full sm:w-1/2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full"
                                on:click={startSelection}>
                            Выбрать главное
                        </button>
                    </div>
                {/if}


            {:else}

                <h1 class="text-2xl md:text-xl"> Что важнее?</h1>
                <Card text={taskA} onSelected={onSelected} color={getColor(400)}/>
                <h1 class="text-2xl md:text-xl mt-4"> Или</h1>
                <Card text={taskB} onSelected={onSelected} color={getColor(400)}/>
            {/if}
        </div>
    </div>
{/if}
<div class="mt-3 flex flex-auto justify-center">
    <div class="flex flex-col w-5/6 md:w-1/2 text-center">
        <div>Придумал:
            <a href="https://twitter.com/Felegz" class="text-blue-700">
                @Felegz
            </a>
        </div>
        <div>Собрал демку:
            <a href="https://twitter.com/PavelOganesyan" class="text-blue-700">
                @PavelOganesyan
            </a>
        </div>
        <div class="">
            <a href="https://github.com/Wolwer1nE/wsid" class="text-blue-700">
                Исходники
            </a>
        </div>
    </div>
</div>