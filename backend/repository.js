import {readJSONFromFile} from "./fs-utils.js";
import mongoose from "mongoose";

let patientsSchema = new mongoose.Schema({
    // numRes: Number,
    name: String,
    // sex: String,
    // address: String,

})
export let Patient = mongoose.model('Patients', patientsSchema)


export const getUsers = () => {
    // return readJSONFromFile('db')
    return Patient.find()
}

export const addUser = async (name) => {
    console.log('POST NAME: ', name)
    let Patient_ONE = new Patient({
        name: name
    })
    return Patient_ONE.save()
}

export const deleteUser = async (id) => {
    console.log('DELETE PATIENT:', id)
    return Patient.deleteOne({_id: id})

}