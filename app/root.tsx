import {
  ActionFunction,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import type { MetaFunction } from "remix";
import appstyles from "./styles/appstyles.css"
import { theme } from "./themecookie";
import { parseCookie } from "./utils/parseCookie";
import { Navigation } from "./components/Navigation";

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: appstyles,
    },
    {
      rel: "stylesheet",
      // This is a route: no need to import a file!
      href: "theme.css",
    }
    // {
    //   rel: 'stylesheet',
    //   href: tailwind
    // },
  ]
}

export const meta: MetaFunction = () => {
  return { title: "Tobi's Portfolio" };
};


export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await parseCookie(request, theme);
  if (!cookie.mode) cookie.mode = "light";

  return { mode: cookie.mode };
};


export const action: ActionFunction = async ({ request }) => {
  const cookie = await parseCookie(request, theme);
  const formData = await request.formData();
  const { mode } = Object.fromEntries(formData)
  cookie.mode = mode as string

  console.log(cookie, mode);

  return redirect("/", {
    headers: {
      "Set-Cookie": await theme.serialize(cookie),
    },
  });
};



function Document({
  children,
  title = `Agunloye Oluwatobiloba's Portfolio`
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen relative">
        {children}
        {process.env.NODE_ENV === "development" &&
          <LiveReload />
        }
      </body>
    </html>
  );
}

export default function App() {
  const { mode } = useLoaderData()
  return (
    <Document>
      <Outlet context={{ mode }} />
      <ScrollRestoration />
      {/* <Scripts /> */}
    </Document>
  );
}

// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width,initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         {process.env.NODE_ENV === "development" && <LiveReload />}
//       </body>
//     </html>
//   );
// }
