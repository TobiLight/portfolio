import { Footer } from "~/components/Footer"
import { Navigation } from "~/components/Navigation"

export default function Aboutme() {
    return (
        <div style={{ minHeight: 'inherit' }} className="flex flex-col">
            <Navigation />
            <main className="mt-[60px] px-10">
                <h1 className="text-4xl">About Me 😎</h1>
                <div className="mt-16 mb-32">
                    <p>
                        My name is <span className="font-bold">Oluwatobiloba Light</span>, a cool guy, a great team player 🤝 , a frontend developer (and a backend developer but sometimes, lol. Sooo, fullstack?? 😏) originally from Ogun state, Nigeria currently based in Lagos, Nigeria.
                        <br />
                        <br />
                        I have been in tech and working on web projects for over 4 years with experience in Frontend ranging from <span className="bg-green-100 text-sm px-2 rounded">Javascript</span>, <span className="bg-green-100 text-sm px-2 rounded">ReactJs</span>, <span className="bg-green-100 text-sm px-2 rounded">VueJs</span>, <span className="bg-green-100 text-sm px-2 rounded">SvelteJS</span>, <span className="bg-green-100 text-sm px-2 rounded">CSS</span> and Backend, <span className="bg-green-100 text-sm px-2 rounded">NodeJS</span>. (PS. I just started learning <span className="bg-green-100 text-sm px-2 rounded">Python</span> and <span className="bg-green-100 text-sm px-2 rounded">Rust</span>). I have worked for Edves School Management System, 12Musts and Technolcast. Although,  I have mostly worked as a freelancer through the years and delivered beyond expectation 💯 💪
                        <br />
                        <br />
                        When I'm not behind my laptop fingering my keypad, you can find me gaming 🎮, watching tech videos 📽, geeking about the spiritual realm and the universe at large 👻 🌌, or reading new stuff on the internet.
                    </p>
                    <p className="mt-4">You can catch me on <a className="underline decoration-wavy" href="https://twitter.com/Tobii_ii">Twitter</a> and <a className="underline decoration-wavy" href="https://github.com/TobiLight">Github</a></p>
                </div>
            </main>
            <Footer />
        </div>
    )
}