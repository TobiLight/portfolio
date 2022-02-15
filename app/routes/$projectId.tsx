import { Link, LoaderFunction, MetaFunction, useCatch, useLoaderData } from "remix"
import { getClient } from "~/libs/sanity/getClient";
import { ProjectInterface } from "~/utils/types";
import notFoundGif from '../../public/lost.gif'

type LoaderData = {
    project: ProjectInterface
}

export const meta: MetaFunction = ({ data }: { data: LoaderData | undefined }) => {
    if (!data) {
        return {
            title: 'No project',
            description: 'No project found or does not exist!'
        }
    }
    return { title: `Oluwatobiloba Light's Projects - ${data?.project.name}`, description: data.project.description }
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
                <div className="goback">
                    <Link to="/projects" prefetch="intent" className="underline decoration-wavy">Go back</Link>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div>
                        <h3 className="mb-3 font-bold text-2xl project-name">{project.name}</h3>
                        <p className="text-[16px] project-description">{project.description}</p>
                    </div>

                    <div className="mt-7">
                        <h3 className="font-semibold text-xl mb-3">Tech Stack</h3>
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
                        <h3 className="font-semibold text-xl mb-3">Contribution</h3>
                        <ul className="list-disc pl-6 grid gap-4 project-contribution">
                            {project.contribution.map((result, index) => {
                                return (
                                    <li key={index} className="project-contribution">
                                        {result}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="mt-7">
                        <h3 className="font-semibold text-xl mb-3">Outcome</h3>
                        <ul className="list-disc pl-6 grid gap-4 project-outcome">
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
                            <h3 className="font-semibold text-xl mb-3">Website</h3>
                            <p className="flex gap-2">
                                <span>🔗</span>
                                <a title={project.link} href={`${project.link}`} className="max-w-96 text-green-700 font-semibold">{project.link}</a>
                            </p>
                        </div>
                    }

                    {
                        project.github && <div className="mt-7">
                            <h3 className="font-semibold text-xl mb-3">Github Repo</h3>
                            <div className="flex gap-2">
                                <span>🔗</span>
                                <a title={project.github} href={`${project.github}`} className="text-green-700 font-semibold truncate overflow-hidden text-ellipsis">{project.github}</a>
                            </div>
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
            <div className="error relative flex flex-col justify-center text-center mt-12 w-5/6 mx-auto">
                <div className="relative mx-auto">
                    <img src={notFoundGif} alt="404 not found" className="rounded object-cover" />
                </div>
                <p className="text-2xl font-semibold mt-2">
                    {caught.data}
                </p>
            </div>
        );
    }

    if (caught.status === 500) {
        return (
            <div className="flex flex-col justify-center text-center mt-40 w-5/6 mx-auto h-[75px]">
                <p className="text-2xl font-semibold mt-2">
                    <p>Yikes! The App has crashed 😬</p>
                </p>
            </div>
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
