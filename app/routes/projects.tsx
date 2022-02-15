import { Link, LinksFunction, LoaderFunction, MetaFunction, useCatch, useLoaderData } from "remix"
import { Footer } from "~/components/Footer"
import { getClient } from "~/libs/sanity/getClient"
import projectcss from "../styles/project.css"

interface ProjectInterface {
    _id: string
    name: string
    description: string
    technologies: Array<string>
    outcome: Array<string>
    contribution: Array<string>
    link?: string
    github?: string
}

type ProjectType = {
    projects: ProjectInterface
}


export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: projectcss
        }
    ]
}

export const meta: MetaFunction = () => {
    return {
        title: "Agunloye Oluwatobiloba's Projects",
        description: "Check out some of my favorite projects built with different tools."
    }
}

export const loader: LoaderFunction = async ({ request, params }): Promise<ProjectInterface[] | null> => {
    const projects = await getClient().fetch(
        `*[_type == 'project'] | order(_createdAt asc)`
    ) as ProjectInterface[]
    if (!projects.length) {
        return null
    }
    let data = projects as ProjectInterface[]
    return data
}

const ProjectsRoute = () => {
    const projects = useLoaderData<ProjectInterface[]>()
    return (
        <div style={{ minHeight: 'inherit' }} className="flex flex-col">
            <main className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 projects-page" style={{ minHeight: 'inherit' }}>
                <h1 className="text-4xl projects-heading">Projects 🚧</h1>
                <div className="project-tab text-center mt-20">
                    {/* <h1 className="text-2xl about-desc">Under construction 🏗. Please check back soon</h1> */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        {projects.map(project => {
                            return (
                                <div key={project._id} className="relative flex flex-col justify-between rounded max-h-[250px] bg-white shadow-md text-left p-3">
                                    {/* <div className="py-2 px-6 bg-green-200 rounded-tr rounded-tl">
                                        <h3 className="font-bold text-left text-lg">{project.name}</h3>
                                    </div> */}
                                    <h3 className="font-bold text-lg">{project.name}</h3>
                                    <hr className="my-3" />
                                    <div>
                                        <p>{project.description.slice(0, 90) + '...'}</p>
                                    </div>

                                    <div className="flex justify-end relative mt-3 bottom-0">
                                        <Link className="p-3 rounded-md bg-green-200 hover:bg-green-300" to="/">Open project</Link>


                                    </div>

                                    {/* <input type="radio" name={project.name} id={project._id} />
                                    <label htmlFor={project._id} className="py-2 px-6 bg-green-200 rounded-tr rounded-tl">
                                        <h3 className="font-bold text-left text-lg">{project.name}</h3>
                                    </label>
                                    <div className="project-description text-left py-2 px-4">
                                        <p>{`${project.description.slice(0, 120).concat('')}`} <Link to="/" className="text-green-600 font-semibold decoration-wavy underline">check it out</Link></p>

                                        </div> */}
                                </div>
                            )
                        })}

                    </div>

                    {/* <input className="absolute opacity-0" id="project-one" type="radio" name="radio" />
                    <label className="project-label block p-5 leading-normal cursor-pointer" htmlFor="project-one">Edves School Management System</label>
                    <div className="project-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                    </div> */}
                </div>
            </main >
            <Footer />
        </div >
    )
}

export function CatchBoundary() {
    const caught = useCatch();

    if (caught.status === 404) {
        return (
            <div className="error-container">
                Nothing to display
            </div>
        );
    }

    if (caught.status === 500) {
        return (
            <p>Yikes! The App has crashed 😬</p>
        )
    }

    // return (
    //     <p>An error has occured :(</p>
    // )

    throw new Error(
        `Unexpected caught response with status: ${caught.status}`
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div className="error-container">
            <p>{error ? error.stack : 'I did a whoopsies'}</p>
        </div>
    );
}
export default ProjectsRoute
