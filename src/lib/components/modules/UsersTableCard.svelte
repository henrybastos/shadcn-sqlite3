<script>
    import { DatabaseAPI } from "$lib/DatabaseAPI";
    import { LAST_USER, USERS } from "$lib/UsersStore";
    import { TOASTS } from "$lib/ToastStore";
    import * as Card from "$lib/components/ui/card";
    import * as Table from "$lib/components/ui/table";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import * as Alert from "../ui/alert";
    import Button from "$lib/components/ui/button/button.svelte";
    import { Badge } from "$lib/components/ui/badge";
    import AlertDialogContent from "../ui/alert-dialog/alert-dialog-content.svelte";
    import { Description } from "../ui/dialog";

    async function getUsers () {
        $USERS = await DatabaseAPI.getDBUsers();
    }

    async function clearDB () {
        await DatabaseAPI.clearDB();
        TOASTS.pushToast({
            title: 'Databased cleared!', 
            description: 'All data erased from the database.', 
            variant: 'success'
        });
        $USERS = [];
    }
</script>

<Card.Root class="mb-4 rounded-md">
    <Card.Header>
        <h1 class="text-xl font-bold">Users</h1>
    </Card.Header>
    
    <Card.Content>
        <div class="max-h-[26rem] overflow-y-auto">
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Age</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {#each $USERS as user}
                        <Table.Row>
                            <Table.Cell class="inline-flex items-center">
                                {#if $LAST_USER.name === user.name}
                                    <Badge class="bg-emerald-500 rounded mr-3">New</Badge>
                                {/if}
                                { user.name }
                            </Table.Cell>
                            <Table.Cell>{ user.age }</Table.Cell>
                        </Table.Row>
                    {/each}
                </Table.Body>
            </Table.Root>
        </div>
    </Card.Content>

    <Card.Footer class="flex gap-x-3">
        <Button variant="outline" on:click={getUsers}>Get users</Button>

        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button variant="destructive">Clear DB</Button>
            </AlertDialog.Trigger>

            <AlertDialog.Content>
                <AlertDialog.Header>
                    <AlertDialog.Title>Are you sure you want to clear the database?</AlertDialog.Title>
                    <AlertDialog.Description>This operation will erase any data in the database. This cannot be undone.</AlertDialog.Description>
                </AlertDialog.Header>

                <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action on:click={clearDB}>Clear</AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </Card.Footer>
</Card.Root>