import { Fragment } from "react";
import Header from "../Header";

function DefaultLayout( {children} ) {
    return ( 
        <Fragment>
            <Header/>
            <div>
                {children}
            </div>
        </Fragment>
    );
}

export default DefaultLayout;