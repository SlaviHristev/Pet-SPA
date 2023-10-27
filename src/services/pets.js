import * as api from './api.js';


const endpoints = {
    getAllPets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    createPet: '/data/pets',
    getById: '/data/pets/',
    editPet: '/data/pets/',
    delPet: '/data/pets/'

}

export async function getAll(){
    return await api.get(endpoints.getAllPets);
}

export async function createPet(data){
    return await api.post(endpoints.createPet,data)
}

export async function getById(id){
    return await api.get(endpoints.getById + id);
}

export async function editPet(id,data){
    return await api.put(endpoints.editPet + id, data)
}

export async function delPet(id){
    return await api.del(endpoints.delPet + id)
}