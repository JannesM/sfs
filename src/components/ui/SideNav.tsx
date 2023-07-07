import { component$, useSignal } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { BsBoxArrowLeft, BsCardChecklist, BsCreditCard, BsGear, BsGrid, BsPeople, BsPersonCircle, BsX } from "@qwikest/icons/bootstrap"
import { Image } from "@unpic/qwik"
import { Searchbar } from "./Searchbar"
import { SideNavLink } from "./SideNavLink"
import { useAuthSignout } from "~/routes/plugin@auth"

export default component$(() => {
    const navbarExpanded = useSignal(true)
    const signout = useAuthSignout()

    return (

        // <aside class="bg-white shadow-2xl flex flex-col h-screen p-5 absolute md:relative -left-[1000px] data-[expanded=true]:left-0 md:left-0 w-screen md:max-w-[320px] transition-all z-50">
        <aside data-expanded={navbarExpanded} class="bg-white shadow-2xl flex flex-col h-screen p-5 absolute lg:relative -left-[2000px] data-[expanded=true]:left-0 lg:left-0 w-screen lg:max-w-[320px] transition-all z-50">
            <header>
                <div class="flex items-center">
                    <Link href="/app">
                        <Image src="/logo.png" alt="LOGO" height={100} width={100} priority class="mix-blend-darken" />
                    </Link>

                    <div class="flex flex-col justify-center ml-2">
                        <span class="font-bold text-xl">SFS</span>
                        <span class="text-lg">Schülernachhilfe</span>
                    </div>
                    <button class="ml-auto text-4xl lg:hidden">
                        <BsX />
                    </button>
                </div>
            </header>

            <div class="flex flex-col mt-8 h-full">
                <Searchbar />

                <SideNavLink to="/app" title="Startseite">
                    <BsGrid />
                </SideNavLink>

                <SideNavLink to="/app/profile" title="Mein Konto">
                    <BsPersonCircle />
                </SideNavLink>
                <SideNavLink to="/app/placements" title="Stellenbörse">
                    <BsPeople />
                </SideNavLink>

                <SideNavLink to="/app/tutorings" title="Verwaltung">
                    <BsCardChecklist />
                </SideNavLink>
                <SideNavLink to="/app/transfers" title="Zahlungsaufträge">
                    <BsCreditCard />
                </SideNavLink>

                <SideNavLink to="/app/settings" title="Einstellungen" class="mt-auto">
                    <BsGear />
                </SideNavLink>

                <button onClick$={() => signout.submit({})} class="mb-3 flex justify-between hover:text-accent-purple text-color-muted font-medium p-3 ml-2 hover:ml-0 hover:border-l-8 hover:border-l-accent-purple hover:bg-backdrop-purple">
                    <div class="flex w-full">
                        <span class="text-2xl mx-4"><BsBoxArrowLeft /></span>
                        <span>Abmelden</span>
                        {/* {loading ? <span class="spinner ml-auto" /> : null} */}
                    </div>
                </button>

                {/* <NavItem to="logout" title="Abmelden" icon={<BsBoxArrowLeft />}  /> */}
                <p class='text-color-muted text-xs text-center'>Digitales SFS-Lastenbuch {process.env.NEXT_PUBLIC_VERSION} <br /> Copyright © 2023, Jannes Meinders</p>
            </div>

        </aside>
    )
})