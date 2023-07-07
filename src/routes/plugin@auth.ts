/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Provider } from "@auth/core/providers";
import CredentialsProvider from "@auth/core/providers/credentials";
import Auth0Provider from "@auth/core/providers/auth0";
import { serverAuth$ } from "@builder.io/qwik-auth";
import { prisma } from "~/core/config";
import { compare } from "bcrypt"

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Auth0Provider({
        clientId: env.get("AUTH0_CLIENT_ID")!,
        clientSecret: env.get("AUTH0_CLIENT_SECRET")!,
        issuer: env.get("AUTH0_ISSUER")!,
      })
    ] as Provider[],
    pages: {
      signIn: "/",
    }
  }));
