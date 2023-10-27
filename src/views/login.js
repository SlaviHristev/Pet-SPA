import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../services/util.js";
import * as user from '../services/user.js';

const loginTemplate = (onSubmit) => html`
        <section id="loginPage">
            <form @submit=${onSubmit} class="loginForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
`

async function onSubmit(ctx,data,event){
    event.preventDefault();
    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!')
    }
   
        await user.login(data.email,data.password);
        event.target.reset();
        ctx.page.redirect('/');

    
    
}

export async function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(ctx,onSubmit)));
}