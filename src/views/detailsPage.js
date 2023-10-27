import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { delPet, getById } from "../services/pets.js";
import { getUserData } from "../services/util.js";


const detailsTemplate = (pet,user,delFunc,notOwner) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age} years</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    ${

                        user
                        ?html`
                          <!-- Only for registered user and creator of the pets-->
                          <div class="actionBtn">
                          <a href="/edit/${pet._id}" class="edit">Edit</a>
                            <a @click=${delFunc}href="javascript:void()0" class="remove">Delete</a>
                        </div>
                        `
                        :
                        nothing
                    }
                    ${
                       notOwner
                       ?
                       html`
                       <div class="actionBtn">
                        <a href="#" class="donate">Donate</a>
                        </div>
                       `
                       :
                       nothing
                    }                       
                    </div>
                </div>
            </div>
        </section>
`


export async function detailsPage(ctx){
    const id = ctx.params.id;
    const pet = await getById(id);

    function isUser() {
            const user = getUserData();
            return user && user._id === pet._ownerId;
        }
    function notOwner() {
            const user = getUserData();
            return user && user._id !== pet._ownerId;
        }
    
    async function delFunc(){
        await delPet(id);
        ctx.page.redirect('/dashboard')
    }

    
    ctx.render(detailsTemplate(pet,isUser(),delFunc,notOwner()));
}