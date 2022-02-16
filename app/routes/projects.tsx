import { Link, LinksFunction, LoaderFunction, MetaFunction, useCatch, useLoaderData } from "remix"
import { Footer } from "~/components/Footer"
import { getClient } from "~/libs/sanity/getClient"
import { ProjectInterface } from "~/utils/types"
import projectcss from "../styles/project.css"

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
            <main className="projects-page" style={{ minHeight: 'inherit' }}>
                <h1 className="text-4xl projects-heading">Projects 🚧</h1>
                <p className="project-subheading">These are some of the projects that I have worked on...</p>
                <div className="project-tab">
                    <div className="grid sm:grid-cols-2 gap-8">
                        {projects.map(project => {
                            return (
                                <div key={project._id} className="project-item">
                                    <h3 title={project.name} className="project-item-name max-w-32">{project.name}</h3>
                                    <hr className="my-3" />
                                    <div>
                                        <p className="project-description">{project.description.slice(0, 90) + '...'}</p>
                                    </div>

                                    <div className="flex justify-end relative mt-3 bottom-0">
                                        <Link className="project-btn" to={`/${project._id}`}>Open project</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
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
