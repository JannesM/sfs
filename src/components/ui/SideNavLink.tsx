import { Slot, component$ } from "@builder.io/qwik"
import { Link, useLocation } from "@builder.io/qwik-city"

type SideNavLinkProps = {
    to: string
    title: string
    class?: string
    badge?: number
}

export const SideNavLink = component$<SideNavLinkProps>((props) => {
    const loc = useLocation()

    return (
        <>
            {
                (loc.url.pathname.split("/").includes(props.to.replace("/", "")) && props.to !== "") ?
                    // selected
                    <Link href={props.to} class={"flex justify-between text-accent-purple font-medium p-3 border-l-8 border-l-accent-purple bg-backdrop-purple " + props.class}>
                        <div class="flex">
                            <span class="text-2xl mx-4">
                                <Slot />
                            </span>
                            <span>{props.title}</span>
                        </div>
                        {
                            !props.badge || props.badge === 0 ? null :
                                <div class="bg-accent-purple w-7 h-6 rounded-full text-white flex justify-center items-center">{props.badge}</div>
                        }
                    </Link>
                    :
                    // not selected
                    <Link href={props.to} class={"flex justify-between hover:text-accent-purple text-color-muted font-medium p-3 ml-2 hover:ml-0 hover:border-l-8 hover:border-l-accent-purple hover:bg-backdrop-purple " + props.class}>
                        <div class="flex">
                            <span class="text-2xl mx-4">
                                <Slot />
                            </span>
                            <span>{props.title}</span>
                        </div>
                        {
                            !props.badge || props.badge === 0 ? null :
                                <div class="bg-accent-purple w-7 h-6 rounded-full text-white flex justify-center items-center">{props.badge}</div>
                        }
                    </Link>
            }
        </>
    )
})