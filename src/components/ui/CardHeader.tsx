import { component$ } from '@builder.io/qwik';

type Props = {
    title: string
    description?: string
}

export const CardHeader = component$<Props>((props) => {
    return (
        <div class="flex justify-between items-center mb-5">
            <span class="font-bold text-xl">{props.title}</span>
            <span class="text-sm text-right text-color-muted">{props.description}</span>
        </div>
    )
});
