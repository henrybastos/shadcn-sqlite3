<script>
    import * as Card from "$lib/components/ui/card";
    import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Switch from "$lib/components/ui/switch/switch.svelte";
    import { slide } from "svelte/transition";

    let inputValue = '';
    let toggleRename = false;
    $: cardTitle = 'My card title';
</script>

<Card.Root class="rounded-md m-5">
    <Card.Header>
        <Card.Title>{ cardTitle }</Card.Title>
        <Card.Description>My card description.</Card.Description>
    </Card.Header>
    <Card.Content>
        <Button class="rounded-sm mb-2" disabled={!toggleRename} on:click={() => cardTitle = inputValue} variant="outline">Rename</Button>

        {#if toggleRename}
            <div transition:slide>
                <Input class="rounded-sm" bind:value={inputValue} id="name" placeholder="John Doe"/>
            </div>
        {/if}

        <div class="flex flex-col">
            <Label for="toggle_rename" class="my-3">Rename</Label>
            <Switch id="toggle_rename" bind:checked={toggleRename} />
        </div>
    </Card.Content>
</Card.Root>
