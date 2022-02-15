import { Link, LoaderFunction, useCatch, useLoaderData } from "remix"
import { getClient } from "~/libs/sanity/getClient";
import { ProjectInterface } from "~/utils/types";
import notFoundGif from '../../public/lost.gif'

type LoaderData = {
    project: ProjectInterface
}

export const loader: LoaderFunction = async ({ params }) => {
    console.log(params.projectId);
    const projectInfo = await getClient().fetch(
        `*[_type == 'project' && _id == '${params.projectId}']`
    ) as ProjectInterface[]

    if (!projectInfo.length) {
        throw new Response("Chale, what you're looking for does not exist!", {
            status: 404
        });
    }

    const data: LoaderData = {
        project: projectInfo[0]
    }
    return data
}

const ProjectRoute = () => {
    const { project } = useLoaderData<LoaderData>()
    return (
        <div style={{ minHeight: 'inherit' }} className="flex flex-col">
            <main className="project-page pb-[120px]">
                <div className="pb-8 text-green-700 font-semibold">
                    <Link to="/projects" prefetch="intent">Go back</Link>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div>
                        <h1 className="mb-3 font-bold text-2xl">{project.name}</h1>
                        <p className="text-[16px]">{project.description}</p>
                    </div>

                    <div className="mt-7">
                        <p className="font-semibold text-xl mb-3">Tech Stack</p>
                        <div className="flex flex-row flex-wrap gap-2">
                            {project.technologies.map((technology, index) => {
                                return (
                                    <p key={index} className="bg-green-200 p-2 rounded text-[14px]">
                                        {technology}
                                    </p>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mt-7">
                        <p className="font-semibold text-xl mb-3">Contribution</p>
                        <ul className="list-disc pl-6 grid gap-4">
                            {project.contribution.map((result, index) => {
                                return (
                                    <li key={index}>
                                        {result}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="mt-7">
                        <p className="font-semibold text-xl mb-3">Outcome</p>
                        <ul className="list-disc pl-6 grid gap-4">
                            {project.outcome.map((result, index) => {
                                return (
                                    <li key={index}>
                                        {result}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {
                        project.link && <div className="mt-7">
                            <p className="font-semibold text-xl mb-3">Website</p>
                            <p className="flex gap-2">
                                <span>🔗</span>
                                <a href={`${project.link}`} className="text-green-700 font-semibold">{project.link}</a>
                            </p>
                        </div>
                    }

                    {
                        project.github && <div className="mt-7">
                            <p className="font-semibold text-xl mb-3">Github Repo</p>
                            <p className="flex gap-2">
                                <span>🔗</span>
                                <a href={`${project.github}`} className="text-green-700 font-semibold">{project.github}</a>
                            </p>
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}


export function CatchBoundary() {
    const caught = useCatch();

    if (caught.status === 404) {
        return (
            <div className="flex flex-col justify-center text-center mt-40 w-5/6 mx-auto h-[75px]">
                <img src={notFoundGif} alt="404 not found" className="rounded" />
                <p className="text-2xl font-semibold mt-2">
                    {caught.data}
                </p>
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

export default ProjectRoute
