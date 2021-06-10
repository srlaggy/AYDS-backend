const express = require("express");
const router = express.Router();
const {Manager} = require("../models");
const {Developer} = require("../models");
const {Knowledge} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Lista de Manager
router.get("/",async (req,resp) => {
    try {
        const allManager = await Manager.findAll();
        resp.send(allManager);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Registro Manager (auxiliar)
router.post("/register",async (req,res) =>{
    try {
        const emailValid = await Manager.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(emailValid) return res.status(400).send("este usuario ya existe");
        //se encripta la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.pass,salt);
        //se crea el usuario
        const manager = await Manager.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            pass: hashPass,
        });
        return res.send(manager);
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Login Manager
router.post("/login",async (req,res) =>{
    try {
        const manager = await Manager.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(!manager) return res.status(400).end("usuario o contraseña equivocada");
        const validPass = await bcrypt.compare(req.body.pass,manager.pass);
        if(!validPass) return res.status(400).end("usuario o contraseña equivocada");
        const token = jwt.sign({id:manager.id}, process.env.SECRET_TOKEN);
        return res.header("auth-token",token).send({
            tipo: 2, 
            nombre: manager.name,
            id: manager.id
        });
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Función modificar qualification de Developer
router.put("/modificar", async (req,res) => {
    try {
        const developer = await Developer.findOne({
            where: {id: req.body.id}
        })
        if(!developer){
            return res.send("usuario inexistente");
        }
        else{
            if(req.body.qualification != null){
                await developer.update({qualification: req.body.qualification,where:{id:req.body.id}});
            }
            return res.send("Datos actualizados");
        }
    } catch (error) {
        res.send(error);
    }
});

//Función que permita modificar validation en knowledge de Developer
router.put("/modifyValidation", async (req,res) => {
    try {
        const knowledge = await Knowledge.findOne({
            where: {id: req.body.id}
        })
        if(!knowledge){
            return res.send("Conocimiento inexistente");
        }
        else{
            if(req.body.validation != null){
                await knowledge.update({validation: req.body.validation,where:{id:req.body.id}});
            }
            return res.send(knowledge);
        }
    } catch (error) {
        res.send(error);
    }
});

//Modificar datos de Manager (auxiliar)
router.put("/modificarManager", async (req,res) => {
    try {
        const manager = await Manager.findOne({
            where: {id: req.body.id}
        })
        if(!manager){
            return res.send("usuario inexistente");
        }
        else{
            if(req.body.name != null){
                await manager.update({name: req.body.name,where:{id:req.body.id}});
            }
            if(req.body.phone != null){
                await manager.update({phone: req.body.phone,where:{id:req.body.id}});
            }
            if(req.body.email != null){
                await manager.update({email: req.body.email,where:{id:req.body.id}});
            }
            if(req.body.pass != null){
                const salt = await bcrypt.genSalt(10);
                const newhashPass = await bcrypt.hash(req.body.pass,salt);
                await manager.update({pass: newhashPass,where:{id:req.body.id}});
            }
            return res.send(manager);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;