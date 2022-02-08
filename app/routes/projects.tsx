import { MetaFunction } from "remix"
import { Footer } from "~/components/Footer"
import { Navigation } from "~/components/Navigation"

export const meta: MetaFunction = () => {
    return {
        title: "Agunloye Oluwatobiloba's Projects",
        description: "Check out some of my favorite projects built with different tools."
    }
}

const ProjectsRoute = () => {
    return (
        <div style={{ minHeight: 'inherit' }} className="flex flex-col">
            <Navigation />
            <main className="md:w-8/12 projects-page" style={{ minHeight: 'inherit' }}>
                <h1 className="text-4xl projects-heading">Projects 🚧</h1>
                <div className="project-tab text-center mt-20">
                    <h1 className="text-2xl about-desc">Under construction 🏗. Please check back soon</h1>
                    {/* <input className="absolute opacity-0" id="project-one" type="radio" name="radio" />
                    <label className="project-label block p-5 leading-normal cursor-pointer" htmlFor="project-one">Edves School Management System</label>
                    <div className="project-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                    </div> */}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProjectsRoute