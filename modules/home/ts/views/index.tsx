import * as React from "react";

export /*bundle*/
function View(): JSX.Element {
    return (
        <div className="page__container">
            <h1>
                My first page using <span className="beyond">BeyondJS</span>!
            </h1>
            <figure>
                <img src="images/profile.jpg" alt="profile picture" />
                <figcaption>
                    <span>Mi nombre es Julio Rodriguez</span>
                    <button>📝 contactame</button>
                </figcaption>
            </figure>
        </div>
    );
}
