import { Link, useOutletContext } from "remix"
import MoonIcon from "./icons/Moon"
import BxsSunIcon from "./icons/Sun";

export const Navigation = (): JSX.Element => {
    const { mode } = useOutletContext<{ mode: 'light' | 'dark' }>();
    const changeModeTo = mode === "light" ? "dark" : "light";
    return (
        <header className="navigation">
            <Link to="/" prefetch="intent" className="navigation-title">Oluwatobiloba Light</Link>
            <div className="theme-toggle">
                <form action="/" method="post">
                    <input type="hidden"
                        name="mode"
                        value={changeModeTo}
                    />
                    {changeModeTo === 'light' ?
                        (
                            <button aria-label="light theme" className="flex" name="mode" value="light" type="submit">
                                <MoonIcon className="w-6 h-6" />
                            </button>
                        ) :
                        (
                            <button aria-label="dark theme" className="flex" name="mode" value="dark" type="submit">
                                <BxsSunIcon className="w-8 h-8 " />
                            </button>
                        )
                    }
                </form>
            </div>
            {/* <p>{changeModeTo}</p> */}
        </header>
    )
}