
import { routeAction$, zod$, z, Form } from "@builder.io/qwik-city"
import { BsSearch } from "@qwikest/icons/bootstrap"
import { TextInput } from "../form/TextInput"
import { component$ } from "@builder.io/qwik"

const searchSchema = z.object({
    query: z.string().nonempty("Erforderlich!")
}).required()

type SearchForm = z.infer<typeof searchSchema>

export const useSearchQuery = routeAction$(
    (item) => {


    },
    zod$({
        text: z.string().trim().min(1),
    })
);

export const Searchbar = component$(() => {
    const search = useSearchQuery()

    return (
        <Form class="flex mb-3" action={search}>
            <TextInput label="Suchen"><BsSearch /></TextInput>
        </Form>

    )
});
