import * as React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "beyond-layout-children": any;
            main: any;
        }
    }
}

export function Layout() {
    return (
        <main className="container">
            <beyond-layout-children />
        </main>
    );
}
