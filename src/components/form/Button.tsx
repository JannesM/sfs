import { QwikMouseEvent, Slot, component$ } from '@builder.io/qwik';

export type ButtonStyle = "purple" | "red" | "green"

export interface ButtonProps {
    btnStyle: ButtonStyle
    class?: string
    loading?: boolean
    onClick$?: (ev: QwikMouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const stylesMapping = {
    "purple": "bg-accent-purple",
    "red": "bg-accent-red",
    "green": "bg-accent-green",
}

export const Button = component$<ButtonProps>((props) => {
    return (
        <button class={[
            "btn",
            props.class,
            props.loading ? "opacity-75" : "opacity-100",
            stylesMapping[props.btnStyle]
        ]} onClick$={props.onClick$}>

            <div class="flex justify-center items-center">
                {
                    props.loading ?
                        <>
                            <div class="spinner" />
                            <span class="ml-2 select-none"><Slot /></span>
                        </>
                        :
                        <span class="select-none"><Slot /></span>

                }
            </div>


        </button>
    );
});