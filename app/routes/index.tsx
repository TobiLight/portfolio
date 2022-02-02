import { LinksFunction } from "remix";
import me from "~/../public/me.jpeg"
import MoonIcon from "~/components/icons/Moon";
import BxsSunIcon from "~/components/icons/Sun";
import styles from "../styles/style.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}
export default function Index() {
  return (
    //     transform: rotate(
    //       -5deg
    // );
    //   transform - origin: bottom left;
    <div>
      <div className="nav flex justify-between h-[50px] items-center bg-black px-4 text-green-100">
        <p className="font-comforter font-bold text-xl tracking-wide">Oluwatobiloba Light</p>
        <div className="cursor-pointer border border-green-300 rounded p-1 text-green-100 hover:text-gray-600 hover:bg-green-200 transition-all delay-75">
          {/* <BxsSunIcon className="w-8 h-8 " /> */}
          <MoonIcon className="w-6 h-6" />
        </div>
      </div>


      <main className="md:w-8/12 mx-auto">
        <section className="pt-16 pb-12 bg-[#fff]">
          <div className="px-6 text-gray-600">
            <div className="w-full mx-auto pb-5">
              <h2 className="text-[32px] leading-[28px] font-comforter transform rotate-[-5deg] origin-bottom-left">
                👋
                <span className="font-bold pl-2">
                  Hi, I'm Light
                </span>
              </h2>
              <p className="text-[24px] font-medium">
                I am a Software Developer based in Lagos, Nigeria. I have a passion for solving problems using Javascript, Python and Rust.
              </p>
            </div>
            <a href="#about" className="about-me font-semibold ">More about me 😎</a>
          </div>
          <div>
          </div>
        </section>

        <section className="bg-[#333] text-green-100 px-6 py-10">
          <h1 style={{ textShadow: '2px 0px #5ebb76' }} className="text-5xl font-bold pb-4">Skills</h1>
          <ul className="list-disc px-8">
            <li>HTML / CSS / SCSS</li>
            <li>Javascript / Typescript</li>
            <li>VueJS / NuxtJS</li>
            <li>ReactJS / NextJs / Remix_run / BlitzJS</li>
            <li>SvelteJS</li>
            <li>NodeJs</li>
            <li>ExpressJS / AdonisJS / NestJs</li>
            <li>Antd Design / TailwindCSS</li>
            <li>MongoDB / PostgreSQL / SQL</li>
            <li>Herok / Vercel / Netlify</li>
            <li>Git</li>
            <li>Python</li>
            <li>Rust</li>
          </ul>
        </section>

        <section className="text-gray-600 bg-white px-6 py-10">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold pb-4 text-gray-900">More</h1>
              <div className="mb-3">
                <span className="pr-1">😎</span>
                <a href="/about-me" className="underline decoration-wavy">About me</a>
              </div>
              <div className="mb-3">
                <span className="pr-1">🚧</span>
                <a href="/projects" className="underline decoration-wavy">Projects</a>
              </div>
              <div className="mb-3">
                <span className="pr-1">📄</span>
                <a href="/resume" className="underline decoration-wavy">Resume</a>
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-5xl font-bold pb-4 text-gray-900">Online</h1>
              <div className="mb-3">
                <a href="https://github.com/TobiLight" className="text-gray-500 underline decoration-wavy">Github</a>
              </div>
              <div className="mb-3">
                <a href="https://twitter.com/Tobii_ii" className="text-blue-500 underline decoration-wavy">Twitter</a>
              </div>
              <div className="mb-3 flex gap-1">
                <span>📩</span>
                <a href="mailto:oluwatobilobagunloye@gmail.com" className="text-ellipsis overflow-hidden">oluwatobilobagunloye@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-3 text-center bg-black text-gray-300">
        <p>Made with ❤ {'&'} 💡</p>
      </footer>
    </div>
  );
}
