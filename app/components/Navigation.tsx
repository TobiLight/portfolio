import { useEffect, useState } from "react";
import { Form, Link, useFetcher, useLocation, useOutletContext, useSearchParams } from "remix"
import MoonIcon from "./icons/Moon"
import BxsSunIcon from "./icons/Sun";

type NavigationType = {
    themeMode: string
}

export const Navigation = ({ themeMode }: NavigationType): JSX.Element => {
    // const { themeMode } = useOutletContext<{ themeMode: 'light' | 'dark' }>();
    const changeModeTo = themeMode === "light" ? "dark" : "light";
    const currentURLPath = useLocation().pathname
    return (
        <header className="navigation">
            <Link to="/" prefetch="intent" className="navigation-title">Oluwatobiloba Light</Link>
            <div className="theme-toggle">
                <form action="/" method="post">
                    <input
                        type="hidden"
                        name="redirectTo"
                        value={currentURLPath}
                    />
                    <input type="hidden"
                        name="mode"
                        value={changeModeTo}
                    />
                    {changeModeTo === 'light' ?
                        (
                            <button aria-label="light theme" className="flex" type="submit">
                                <BxsSunIcon className="w-6 h-6 " />
                            </button>
                        ) :
                        (
                            <button aria-label="dark theme" className="flex" type="submit">
                                <MoonIcon className="w-6 h-6" />
                            </button>
                        )
                    }
                </form>
            </div>
            {/* <p>{changeModeTo}</p> */}
        </header>
    )
}