import React from "react";
import Browser from "./Browser";
import Footer from "./Footer";
import Nav from "./Nav";

function AllBrowsers({ browsers }) {
  return (
        <React.Fragment>
            <Nav/>
            <article>

              <header>
                <h1>Popular browsers</h1>
              </header>

              <div className="browsers">
                {browsers.map((browser, i) => (
                  <Browser key={i} {...browser} />
                ))}
              </div>

            </article>
            <Footer/>
        </React.Fragment>
  );
}

export default AllBrowsers;