import { json, LoaderFunction, MetaFunction, useCatch, useLoaderData } from "remix"
import { Footer } from "~/components/Footer"
import { Navigation } from "~/components/Navigation"
import { getClient } from "~/libs/sanity/getClient"


export const meta: MetaFunction = () => {
    return {
        title: "Agunloye Oluwatobiloba's Projects",
        description: "Check out some of my favorite projects built with different tools."
    }
}

export const loader: LoaderFunction = async ({ request, params }) => {
    const projects: object[] = await getClient().fetch(
        `*[_type == 'project'] | order(_createdAt asc)`
    )
    if (!projects.length) {
        return null
    }
    return { projects }
}

const ProjectsRoute = () => {
    const projects = useLoaderData()
    console.log('projects', projects)
    return (
        <div style={{ minHeight: 'inherit' }} className="flex flex-col">
            <main className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 projects-page" style={{ minHeight: 'inherit' }}>
                <h1 className="text-4xl projects-heading">Projects 🚧</h1>
                <div className="project-tab text-center mt-20">
                    {/* <h1 className="text-2xl about-desc">Under construction 🏗. Please check back soon</h1> */}
                    <div className="grid sm:grid-cols-2">
                        <div className="flex flex-col rounded h-[250px] bg-white shadow-md">
                            <div className="py-2 bg-green-400 rounded-tr rounded-tl">
                                <h3>Title</h3>
                            </div>
                        </div>
                    </div>

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
