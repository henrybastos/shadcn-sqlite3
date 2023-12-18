<script>
    import { LAST_USER, USERS } from "$lib/UsersStore";
    import * as Card from "$lib/components/ui/card";
    import * as Select from "../ui/select";
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";
    import { DatabaseAPI } from "$lib/DatabaseAPI";

    let nameInputValue, ageInputValue;

    async function createUser () {
        await DatabaseAPI.createDBUser(nameInputValue, ageInputValue);
        $USERS = await DatabaseAPI.getDBUsers();
        $LAST_USER.name = nameInputValue;
        nameInputValue = '';
        ageInputValue = '';
    }
</script>

<Card.Root class="rounded-md">
    <Card.Header>
        <h1 class="text-xl font-bold">Create user</h1>
    </Card.Header>

    <Card.Content class="grid grid-cols-2 grid-rows-1 gap-x-4">
        <div class="col-start-1 col-end-2">
            <Label for="name" class="flex my-3">Name</Label>
            <Input bind:value={nameInputValue} class="bg-transparent border border-neutral-700 mt-2" id="name" name="name" type="text" placeholder="MY_DATABASE" />
        </div>

        <div class="col-start-2 col-end-3">
            <Label for="age" class="flex my-3">Age</Label>
            <Input bind:value={ageInputValue} class="bg-transparent border border-neutral-700" id="age" name="age" type="number" placeholder="20" />
        </div>
    </Card.Content>

    <Card.Footer>
        <Button variant="outline" on:click={createUser}>Create user</Button>
    </Card.Footer>
</Card.Root>