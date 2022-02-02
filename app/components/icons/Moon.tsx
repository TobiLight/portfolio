// icon:moon | Teeny Icons https://teenyicons.com/ | Anja van Staden
import * as React from "react";

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 15 15" {...props}>
            <path
                fill="currentColor"
                d="M7.707.003a.5.5 0 00-.375.846 6 6 0 01-5.569 10.024.5.5 0 00-.519.765A7.5 7.5 0 107.707.003z"
            />
        </svg>
    );
}

export default MoonIcon;