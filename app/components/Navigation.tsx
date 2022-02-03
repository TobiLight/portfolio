import { Link } from "remix"
import MoonIcon from "./icons/Moon"

export const Navigation = (): JSX.Element => {
    return (
        <header className="nav flex justify-between h-[50px] items-center bg-black px-4 text-green-100">
            <Link to="/" prefetch="intent" className="font-comforter font-bold text-xl tracking-wide">Oluwatobiloba Light</Link>
            <div className="cursor-pointer border border-green-300 rounded p-1 text-green-100 hover:text-gray-600 hover:bg-green-200 transition-all delay-75 site-theme">
                {/* <BxsSunIcon className="w-8 h-8 " /> */}
                <MoonIcon className="w-6 h-6" />
            </div>
        </header>
    )
}