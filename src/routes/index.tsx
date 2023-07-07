/* eslint-disable @typescript-eslint/no-unused-vars */
import { type Session } from "@auth/core/types";
import { component$ } from '@builder.io/qwik';
import { Form, Link, useLocation, type DocumentHead, type RequestHandler } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { TextInput } from "~/components/form/TextInput";
import { Card } from "~/components/ui/Card";
import { Center } from "~/components/ui/Center";
import { useAuthSignin } from "./plugin@auth";
import { Button } from "~/components/form/Button";
import { translateError } from "~/core/config";

// redirect all authorized requests
export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session")
  const validSession = session && new Date(session.expires) > new Date()

  if (validSession) {
    console.log("Redirect to Dashboard-Page")
    throw event.redirect(302, "/app")
  }
}

export default component$(() => {

  const signIn = useAuthSignin()
  const loc = useLocation()

  return (
    <Center>
      <Card class="modal flex flex-col items-center gap-8">
        <Image src="/logo.png" alt="LOGO" width={160} height={160} priority={true} />

        <div class="flex flex-col items-center">
          <span class="text-lg">SFS Verwaltung</span>
          <span class="text-4xl">Anmelden</span>
          <span class="text-lg font-medium text-accent-red">{loc.url.searchParams.get("error") ? translateError(loc.url.searchParams.get("error") ?? "") : ""}</span>
        </div>

        <Form action={signIn} class="flex flex-col items-center gap-3 w-3/4">
          <input type="hidden" name="providerId" value="credentials" />
          <input type="hidden" name="options.callbackUrl" value="http://localhost:5173/app" />

          <TextInput label="E-Mail" name="options.email" />
          <TextInput label="Passwort" name="options.password" />


          <div class="flex justify-end w-full">
            <Button btnStyle="purple" loading={signIn.isRunning}>Anmelden</Button>
            {/* <button class="btn bg-accent-purple"></button> */}
          </div>

          <Link href="/onboarding" class="flex items-center gap-3">
            <span class="text-slate-800">Noch kein Konto? Hier registrieren.</span>
          </Link>
        </Form>

      </Card>
    </Center >

  )

});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
