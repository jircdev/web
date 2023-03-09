import * as React from "react";
const obj = {
    name: "Julio",
    lastName: "Rodriguez",
    account: "@jircdev",
};

export function View() {
    const items = Object.keys(obj);
    const output = items.map((item) => <li key={item}>{item}</li>);
    return <ul>{output}</ul>;
}
