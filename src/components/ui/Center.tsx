import { Slot, component$ } from '@builder.io/qwik';

export const Center = component$(() => {
    return (
        <div class="grid justify-center place-items-center h-screen">
            <Slot />
        </div>
    )
});
