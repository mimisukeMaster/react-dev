import ReactDOM from "react-dom";
import { App } from "./App";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";

// ReactDOM.renderで何を、どこに描画するか指定
ReactDOM.render(<StyledJsx />, document.getElementById("root"));