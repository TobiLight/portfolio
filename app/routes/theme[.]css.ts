import { LoaderFunction } from "remix";
import { theme } from "~/themecookie";
import { parseCookie } from "~/utils/parseCookie";

export const loader: LoaderFunction = async ({ request }) => {
    const cookie = await parseCookie(request, theme)
    if (!cookie.mode) cookie.mode = "light";

    const darktheme = `
    body {
        background-color: rgb(31 41 55 / 1);
    }

    .navigation {
         background-color: rgb(31 41 55 / 1);
        border-bottom: 2px solid #42e942;
    }

    .navigation-title {
        color: #42e942;
    }

    .theme-toggle {
        box-shadow: 3px 3px #42e942;
        color: #42e942;
    }

    .theme-toggle:hover {
        color: #fff;
        background-color: #42e942;
        box-shadow: none;
    }

    .home-about-me {
        background-color:  rgb(31 41 55 / 1);
    }

    .home-heading {
        color: #42e942;
    }

    .home-about-me-desc {
        color: rgb(220 252 231 /1);
    }

    .about-me-btn, .project-btn {
        box-shadow: 3px 3px #42e942;
        background-color: transparent;
        color: #42e942;
        border: 1px solid #42e942;
    }

    .about-me-btn:hover, .project-btn:hover {
        border: none;
        text-decoration-line: none;
    }

    hr {
        border-color: #42e942;
    }

    .skills-section {
        background-color: rgb(31 41 55 / 1);
    }

    .skills-heading {
        color: #42e942;
        text-shadow: 1px 0px rgb(220 252 231 / 1);
    }

    .more-about-me-section {
        background-color: rgb(31 41 55 / 1);
    }

    .more, .online {
        color: #42e942;
        text-shadow: 1px 0px rgb(220 252 231 / 1);
    }

    .aboutme,
    .projects,
    .resume,
    .github,
    .twitter,
    .email {
        color: rgb(220 252 231 / 1);
    }

    .footer {
        background-color: rgb(31 41 55 / 1);
        border-top: 2px solid #42e942;
    }

    .about-page, .projects-page {
        background-color: rgb(31 41 55 / 1);
    }

    .about-heading, .projects-heading {
        color: #42e942;
    }

    .about-desc {
        color: rgb(220 252 231 / 1);
    }

    .about-desc > .lang {
        color: #000;
        font-weight: 600;
    }

    .project-subheading {
        color: #42e942;
    }

    .project-name {
        color: #42e942;
    }

    .project-item {
        background-color: transparent;
        color: rgb(220 252 231 / 1);
        border: 2px solid #42e942;
        box-shadow: 0 0 20px 0px #42e9424f;
    }
    `

    if (cookie.mode === 'dark') {
        return new Response(darktheme, {
            status: 200,
            headers: {
                "Content-Type": "text/css"
            }
        })
    }

    return new Response('', {
        status: 200,
        headers: {
            "Content-Type": "text/css"
        }
    })
}