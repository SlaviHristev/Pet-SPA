import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPet, getById } from "../services/pets.js";
import { createSubmitHandler } from "../services/util.js";


const editTemplate = (pet,onSubmit) => html`
        <section id="editPage">
            <form @submit=${onSubmit} class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${pet.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${pet.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${pet.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${pet.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value=${pet.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`
async function onSubmit(ctx,data,event){
    const id = ctx.params.id;
    event.preventDefault();
    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!')
    }

    await editPet(id,{
        name: data.name,
        breed:data.breed,
        age:data.age,
        weight:data.weight,
        image:data.image
    });
    event.target.reset();
    ctx.page.redirect(`/details/${id}`)
}

export async function editPage(ctx){
    const id = ctx.params.id;
    const pet = await getById(id);

    ctx.render(editTemplate(pet, createSubmitHandler(ctx,onSubmit)));
}