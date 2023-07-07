import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient()


interface Map {
    [key: string]: string
}

const ERRORS: Map = {
    "Default": "Es ist ein Authentifizierungsfehler aufgetreten!",
    "CredentialsSignin": "Ungültige Zugangsdaten!"
}

export const translateError = (code: string) => {
    console.log(code)
    if (!Object.keys(ERRORS).includes(code)) return "Es ist ein unbekannter Fehler aufgetreten!"
    return ERRORS[code]
}