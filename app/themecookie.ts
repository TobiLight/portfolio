import { createCookie } from "remix"
export const theme = createCookie('ThemeCookie', {
    maxAge: 604_800
})