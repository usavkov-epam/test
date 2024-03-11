import "./styles/styles.css";
import { App } from "./app/app";

const rootElement = document.createElement("main");

document.body.appendChild(rootElement);

const app = new App(rootElement);
app.start();
