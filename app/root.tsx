import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import appstyles from "./styles/appstyles.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: appstyles
    },
    // {
    //   rel: 'stylesheet',
    //   href: tailwind
    // },
  ]
}

export const meta: MetaFunction = () => {
  return { title: "Tobi's Portfolio" };
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
      <body className="md:bg-neutral-300">
        {children}
        {process.env.NODE_ENV === "development" &&
          <LiveReload />
        }
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
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
