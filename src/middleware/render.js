import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAccessToken, getUserData } from "../services/util.js";

const root = document.querySelector('main');
const header = document.querySelector('header');

const navTemplate = (user) => html`
            <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>

                ${
                    user
                    ?html`
                    <li><a href="/create">Create Postcard</a></li>
                    <li><a href="/logout">Logout</a></li>
                    `
                    :html`
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    `
                }
            </ul>
        </nav>
`

function ctxRender(content){
    render(content, root)
};

export function addRender(ctx,next){
    render(navTemplate(getUserData()), header);
    ctx.render = ctxRender;
    next();
}