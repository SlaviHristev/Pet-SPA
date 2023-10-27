import { html } from "../../node_modules/lit-html/lit-html.js";
import * as user from '../services/user.js';
import { createSubmitHandler } from "../services/util.js";

const registerTemplate = (onSubmit) =>html`
        <section id="registerPage">
            <form @submit=${onSubmit} class="registerForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>
`
async function onSubmit(ctx,data,event){
    event.preventDefault();
    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!')
    }
    if(data.password !== data.repeatPassword){
       return alert('Passwords dont match!')
    }

        await user.register(data.email,data.password);
        event.target.reset();
        ctx.page.redirect('/')
    


}

export async function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(ctx,onSubmit)))
};