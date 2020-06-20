<script>
    export let text
    export let onSelected
    export let color

    function runCallback() {
        console.log("Yeaha")
        onSelected(text)
    }
</script>
<div class ='mt-4 text-center sm:flex-col'>
<button
        on:click={runCallback}
        class="mt-4 text-2xl md:text-xl w-full sm:w-1/2 {color} hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full">
    {text}
</button>
</div>