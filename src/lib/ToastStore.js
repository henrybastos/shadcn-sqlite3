import { writable } from "svelte/store";
 
function createToastsStore () {
   const { subscribe, update, set } = writable([]);

   function pushToast ({ title, description, variant }) {
      const newToast = {
         active: true,
         variant,
         title,
         description
      };

      const toastID = `ID_${ Math.random().toString().slice(2,10) }`;

      update(toasts => (
         {
            ...toasts,
            [toastID]: newToast
         }
      ));
   }

   return {
      set,
      subscribe,
      pushToast
   }
}

export const TOASTS = createToastsStore();