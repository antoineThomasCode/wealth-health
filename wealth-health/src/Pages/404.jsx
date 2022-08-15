import React from "react";
import "../sass/App.scss";
import NotFound from "../components/GenericComponents/NotFound";
import "../sass/pages/404.scss";

function Page404 () {

    return (
        <main className="pageNotFound">
            <NotFound />
        </main>
    )
}
export default Page404