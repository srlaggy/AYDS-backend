const express = require("express");
const router = express.Router();
const {Client} = require("../models");
const {Project} = require("../models");
const {Module} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Registro Client (auxiliar)
router.post("/register",async (req,res) =>{
    try {
        const emailValid = await Client.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(emailValid) return res.status(400).send("este usuario ya existe");
        //se encripta la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.pass,salt);
        //se crea el usuario
        const client = await Client.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            pass: hashPass,
        });
        return res.send(client);
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Login Client
router.post("/login",async (req,res) =>{
    try {
        const client = await Client.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(!client) return res.status(400).end("usuario o contraseña equivocada");
        const validPass = await bcrypt.compare(req.body.pass,client.pass);
        if(!validPass) return res.status(400).end("usuario o contraseña equivocada");
        const token = jwt.sign({id:client.id}, process.env.SECRET_TOKEN);
        return res.header("auth-token",token).send({
            tipo: 1, 
            nombre: client.name,
            id: client.id
        });
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Lista de Client
router.get("/",async (req,resp) => {
    try {
        const allClient = await Client.findAll();
        resp.send(allClient);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Modificar datos de Client (auxiliar)
router.put("/modificar", async (req,res) => {
    try {
        const client = await Client.findOne({
            where: {id: req.body.id}
        })
        if(!client){
            return res.send("usuario inexistente");
        }
        else{
            if(req.body.name != null){
                await client.update({name: req.body.name,where:{id:req.body.id}});
            }
            if(req.body.phone != null){
                await client.update({phone: req.body.phone,where:{id:req.body.id}});
            }
            if(req.body.email != null){
                await client.update({email: req.body.email,where:{id:req.body.id}});
            }
            if(req.body.pass != null){
                const salt = await bcrypt.genSalt(10);
                const newhashPass = await bcrypt.hash(req.body.pass,salt);
                await client.update({pass: newhashPass,where:{id:req.body.id}});
            }
            return res.send(client);
        }
    } catch (error) {
        res.send(error);
    }
});

//Entrega Project de un Client
router.post("/getProject",async (req,resp) => {
    try {
        const project = await Project.findOne({
            where: {
                id_client: req.body.id_client,
            },
        });
        resp.send(project);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Datos de un cliente
router.post("/getClient",async (req,resp) => {
    try {
        const client = await Client.findOne({
            where: {
                id: req.body.id,
            },
        });
        resp.send(client);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

module.exports = router;