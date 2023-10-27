import page from "../node_modules/page/page.mjs";
import { addRender } from "./middleware/render.js";
import { logout } from "./services/user.js";
import { createPage } from "./views/createPage.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/registerPage.js";



page(addRender);
page('/',homePage);
page('/login',loginPage);
page('/register', registerPage);
page('/dashboard',dashboardPage);
page('/details/:id', detailsPage);
page('/create',createPage);
page('/edit/:id', editPage);
page('/logout',logout);
page.start();