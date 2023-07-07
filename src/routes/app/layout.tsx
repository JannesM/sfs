import type { Session } from "@auth/core/types"
import { Slot, component$ } from "@builder.io/qwik"
import type { RequestHandler } from "@builder.io/qwik-city"
import SideNav from "~/components/ui/SideNav"


// block all unauthorized requests
export const onRequest: RequestHandler = (event) => {
    const session: Session | null = event.sharedMap.get("session")
    const validSession = session && new Date(session.expires) > new Date()

    if (!validSession) {
        console.log("Redirect to Login-Page")
        throw event.redirect(302, "/")
    }
}


export default component$(() => {
    return (
        <div class="absolute flex h-screen w-screen overflow-hidden">
            <div>
                <SideNav />
            </div>
            <div class="w-full overflow-y-scroll">
                <main class="flex flex-col gap-5 w-full pb-10">
                    {/* <Header title={props.title} subtitle={props.subtitle} /> */}
                    <Slot name="header" />

                    <div class="flex flex-col gap-5 overflow-y-scroll" >
                        <Slot />
                    </div>
                </main>
            </div>
        </div>
    )
})