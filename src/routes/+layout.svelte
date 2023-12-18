<script>
    import "../app.pcss";
    import { TOASTS } from "$lib/ToastStore";
    import Toast from "$lib/components/toast.svelte";
</script>

<div class="flex flex-col absolute top-4 right-4 h-fit gap-y-2 overflow-hidden">
    {#each Object.entries($TOASTS) as [id, toastProps]}    
        <Toast {...toastProps} {id} />
    {/each}
</div>

<slot />