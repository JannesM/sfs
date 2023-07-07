import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { BsFilterLeft, BsPerson } from "@qwikest/icons/bootstrap"
import { useAuthSession } from "~/routes/plugin@auth"


type Props = {
    title: string
    subtitle: string
}

export const Header = component$<Props>((props) => {
    const session = useAuthSession()
    // const { toggleNavbar } = useInteraction()

    return (
        <header class="flex justify-between items-center w-full h-[80px] px-5 bg-white">
            {/* page title */}
            <div class="flex items-center gap-4">
                <button class="text-3xl lg:hidden">
                    <BsFilterLeft />
                </button>

                {
                    <div class="flex flex-col">
                        <h1 class="font-bold text-xl">{props.title}</h1>
                        <span class="text-color-muted hidden sm:block">{props.subtitle}</span>
                    </div>
                }
            </div>

            <div class="flex gap-10">

                {/* profile */}
                <Link href="/profile" class="flex items-center gap-2 cursor-pointer">
                    <div class="flex flex-col text-right font-light text-sm">
                        <p>Hallo, <span class="font-bold">{session.value?.user?.name?.split(" ").at(0)}</span></p>
                        <p>- Berechtigung -</p>
                    </div>

                    <div class="flex justify-center items-center">
                        <BsPerson class="text-3xl" />
                    </div>
                </Link>
            </div>
        </header>
    )
})