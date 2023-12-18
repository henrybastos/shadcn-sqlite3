<script>
   import * as Alert from "$lib/components/ui/alert";
   import { onMount } from "svelte";
   import { fly } from "svelte/transition";
   import { TOASTS } from "$lib/ToastStore";

   const toastTTL = 4000;
   const props = $$restProps;
   const variants = {
      success: 'bg-green-500'
   }

   onMount(() => {
      setTimeout(() => {
         $TOASTS[props.id].active = false;
      }, toastTTL)
   })
</script>

{#if $TOASTS[props.id].active}
   <div transition:fly={{ x: 20 }}>
      <Alert.Root class={`rounded min-w-[18rem] ${ variants[props.variant] }`}>
            <Alert.Title>{ props.title }</Alert.Title>
            <Alert.Description>{ props.description }</Alert.Description>
      </Alert.Root>
   </div>
{/if}