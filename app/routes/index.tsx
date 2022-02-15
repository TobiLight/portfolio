import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <main className="md:w-[65%] mx-auto pb-10">
        <section className="pt-16 pb-12 home-about-me">
          <div className="px-6">
            <div className="w-full mx-auto pb-5">
              <h2 className="home-heading">
                👋
                <span className="font-bold pl-2">
                  Hi, I'm Light
                </span>
              </h2>
              <p className="home-about-me-desc">
                I am a Software Developer based in Lagos, Nigeria. I have a passion for solving problems using Javascript, Python and Rust.
              </p>
            </div>
            <Link to="/about" prefetch="intent" className="about-me-btn font-semibold">More about me 😎</Link>
          </div>
          <div>
          </div>
        </section>

        <section className="skills-section">
          <div className="flex items-center gap-2 pb-5">
            <h1 className="skills-heading">Skills</h1>
            <span className="text-4xl">👨‍💻</span>
          </div>
          <div className="gap-y-8 lg:gap-y-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4 sm:mb-0">
              <div className="flex gap-2 items-center px-4">
                <span>👉</span>
                <h3 className="font-semibold">Frontend</h3>
              </div>
              <ul className="list-disc pl-10">
                <li>HTML / CSS / SCSS</li>
                <li>Javascript / Typescript</li>
                <li>VueJS / NuxtJS</li>
                <li>ReactJS / NextJs / Remix_run / BlitzJS</li>
                <li>SvelteJS</li>
                <li>Antd Design / TailwindCSS</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-0">
              <div className="flex gap-2 items-center px-4">
                <span>👉</span>
                <h3 className="font-semibold">Backend</h3>
              </div>
              <ul className="list-disc pl-10">
                <li>NodeJs</li>
                <li>ExpressJS</li>
                <li>AdonisJS</li>
                <li>NestJS</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-0">
              <div className="flex gap-2 items-center px-4">
                <span>👉</span>
                <h3 className="font-semibold">Database</h3>
              </div>
              <ul className="list-disc pl-10">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-0">
              <div className="flex gap-2 items-center px-4">
                <span>👉</span>
                <h3 className="font-semibold">Deployment {'&'} Version Control</h3>
              </div>
              <ul className="list-disc pl-10">
                <li>Heroku</li>
                <li>Vercel</li>
                <li>Netlify</li>
                <li>Git</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-0">
              <div className="flex gap-2 items-center px-4">
                <span>👉</span>
                <h3 className="font-semibold">Others</h3>
              </div>
              <ul className="list-disc pl-10">
                <li>WordPress</li>
                <li>Python</li>
                <li>Rust (in progress... 👨‍🎓)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="more-about-me-section">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center pb-4">
                <h1 className="text-3xl font-bold  more">More</h1>
                <span className="text-2xl">🔗</span>
              </div>
              <div className="mb-3">
                <span className="pr-1">😎</span>
                <Link to="/about" prefetch="intent" className="aboutme">About me</Link>
              </div>
              <div className="mb-3">
                <span className="pr-1">🚧</span>
                <Link to="/projects" prefetch="intent" className="projects">Projects</Link>
              </div>
              <div className="mb-3">
                <span className="pr-1">📄</span>
                <Link to='/Agunloye_Oluwatobiloba_Resume.pdf' prefetch="intent" className="resume">Resume</Link>
              </div>
            </div>

            <div className="w-full">
              <div className="flex gap-2 items-center pb-4">
                <h1 className="text-3xl font-bold online">Online</h1>
                <span className="text-2xl">🌐</span>
              </div>
              <div className="mb-3">
                <Link to="https://github.com/TobiLight" prefetch="intent" className="text-gray-500 github">Github</Link>
              </div>
              <div className="mb-3">
                <Link to="https://twitter.com/Tobii_ii" prefetch="intent" className="text-blue-500 twitter">Twitter</Link>
              </div>
              <div className="mb-3 flex gap-1">
                <span aria-label="Email">📩</span>
                <a href="mailto:oluwatobilobagunloye@gmail.com" className="text-ellipsis overflow-hidden email">oluwatobilobagunloye@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
