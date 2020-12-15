import React from "react";
import { render } from "react-dom";
import AllBrowsers from "./components/AllBrowsers";
import data from "../data/browsers.json";

render(<AllBrowsers browsers = {data} />, document.getElementById("root"));