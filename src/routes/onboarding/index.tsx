import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { Form, Link, RequestHandler, routeAction$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { TextInput } from "~/components/form/TextInput";
import { Card } from "~/components/ui/Card";
import { Center } from "~/components/ui/Center";

// redirect all authorized requests
export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session")
  const validSession = session && new Date(session.expires) > new Date()

  if (validSession) {
    console.log("Redirect to Dashboard-Page")
    throw event.redirect(302, "/app")
  }
}


export const useSignUp = routeAction$((from, event) => {


  return {
    error: ""
  }
})

export default component$(() => {
  const signup = useSignUp()

  return (
    <Center>
      <Card class="modal flex flex-col items-center gap-8">
        <Image src="/logo.png" alt="LOGO" width={160} height={160} priority={true} />

        <div class="flex flex-col items-center">
          <span class="text-lg">SFS Verwaltung</span>
          <span class="text-4xl">Willkommen</span>
          <span class="text-lg font-medium text-accent-red">{signup.value?.error}</span>
        </div>

        <Form action={signup} class="flex flex-col items-center gap-3 w-3/4">
          <TextInput label="E-Mail" name="options.email" />
          <TextInput label="Passwort" name="options.password" />
          <TextInput label="Passwort Wiederholen" name="options.password" />

          <div class="flex justify-end w-full">
            <button class="btn bg-accent-purple">Konto erstellen</button>
          </div>

          <Link href="/" class="flex items-center gap-3">
            <span class="text-slate-800">Du hast bereits ein Konto? Hier anmelden.</span>
          </Link>
        </Form>

      </Card>
    </Center >
  )

});