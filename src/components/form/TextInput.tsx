import { Slot, component$, useId } from '@builder.io/qwik';

type Props = {
    label: string
    config?: any

    name?: string
    error?: string
    disabled?: boolean
    class?: string
    password?: true
}



export const TextInput = component$<Props>((props) => {
    const id = useId()
    const { disabled = false } = props

    return (
        <div class={"flex flex-col w-full " + props.class}>
            <div class={"relative flex border rounded-lg " + (props.error && !disabled ? "border-red-500 " : "border-input-border")}>
                {/* text-input */}
                <input
                    class="peer h-12 w-full focus:outline-none rounded-lg pl-4 placeholder:invisible bg-white disabled:bg-input-disabled"
                    id={id}
                    name={props.name}
                    autoComplete="off"
                    placeholder="placeholder"
                    disabled={disabled}
                    type={props.password ? "password" : "text"}
                    {...props.config} />
                {/* text-input-label */}
                <label class="pointer-events-none bg-white font-medium peer-disabled:bg-backdrop-purple rounded-lg
          absolute -top-3 left-3 text-sm translate-y-0 px-2
          peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:text-base
          peer-placeholder-shown:px-0
          peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:translate-y-0 peer-focus:px-2 transition-all" for={id}>{props.label}</label>

                <div class="absolute right-0 flex justify-center items-center h-12 w-12 pointer-events-none">
                    <span class="text-2xl">
                        <Slot />
                    </span>
                </div>

            </div>

            {props.error && !disabled ? <label class="pointer-events-none text-accent-red leading-5 my-1 transition-all text-sm" for={id}>{props.error}</label> : null}
        </div>
    )
});

