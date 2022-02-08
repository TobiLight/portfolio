import { Cookie } from "remix";

export const parseCookie = async (request: Request, cookie: Cookie) => {
    const cookieFromHeader = request.headers.get('Cookie')
    const parsedCookie: { mode: string } = (await cookie.parse(cookieFromHeader)) || {}
    return parsedCookie
}