const express = require("express");
const router = express.Router();
const {Developer} = require("../models");
const {Knowledge} = require("../models");
const {Module} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Lista de Developer
router.get("/",async (req,resp) => {
    try {
        const allDeveloper = await Developer.findAll();
        resp.send(allDeveloper);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Registro Developer (auxiliar)
router.post("/register",async (req,res) =>{
    try {
        const emailValid = await Developer.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(emailValid) return res.status(400).send("este usuario ya existe");
        //se encripta la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.pass,salt);
        //se crea el usuario
        const developer = await Developer.create({
            name: req.body.name,
            phone: req.body.phone,
            type: req.body.type,
            qualification: req.body.qualification,
            email: req.body.email,
            pass: hashPass,
        });
        return res.send(developer);
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Login Developer
router.post("/login",async (req,res) =>{
    try {
        const developer = await Developer.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(!developer) return res.status(400).end("usuario o contraseña equivocada");
        const validPass = await bcrypt.compare(req.body.pass,developer.pass);
        if(!validPass) return res.status(400).end("usuario o contraseña equivocada");
        const token = jwt.sign({id:developer.id}, process.env.SECRET_TOKEN);
        return res.header("auth-token",token).send({
            tipo: 3, 
            nombre: developer.name,
            id: developer.id
        });
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Perfil de Developer
router.post("/profile",async (req,resp) => {
    try {
        const developer = await Developer.findOne({
            where:{
                id: req.body.id,
            },
        });
        resp.send(developer);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Registro knowledge
router.post("/knowledgeregister",async (req,res) =>{
    try {
        //se verifica que el nombre del conocimiento no sea nulo
        if(req.body.name === null) return res.status(400).send(error);
        //se crea el knowledge
        const knowledge = await Knowledge.create({
            name: req.body.name,
            level: req.body.level,
            id_developer: req.body.id
        });
        return res.send(knowledge);
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Conocimientos del Developer
router.post("/knowledge",async (req,resp) => {
    try {
        const knowledge = await Knowledge.findAll({
            where: {
                id_developer: req.body.id,
            },
        });
        resp.send(knowledge);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Modificar datos de Developer
router.put("/modificar", async (req,res) => {
    try {
        const developer = await Developer.findOne({
            where: {id: req.body.id}
        })
        if(!developer){
            return res.send("usuario inexistente");
        }
        else{
            if(req.body.name != null){
                await developer.update({name: req.body.name,where:{id:req.body.id}});
            }
            if(req.body.phone != null){
                await developer.update({phone: req.body.phone,where:{id:req.body.id}});
            }
            if(req.body.type != null){
                await developer.update({type: req.body.type,where:{id:req.body.id}});
            }
            if(req.body.qualification != null){
                await developer.update({qualification: req.body.qualification,where:{id:req.body.id}});
            }
            if(req.body.pass != null){
                const salt = await bcrypt.genSalt(10);
                const newhashPass = await bcrypt.hash(req.body.pass,salt);
                await developer.update({pass: newhashPass,where:{id:req.body.id}});
            }
            if(req.body.id_module != null){
                await developer.update({id_module: req.body.id_module,where:{id:req.body.id}});
            }
            return res.send(developer);
        }
    } catch (error) {
        res.send(error);
    }
});

//Lista de Developer internos sin asignar
router.get("/assign",async (req,resp) => {
    try {
        const allDeveloper = await Developer.findAll({
            where:{
                // interno es 0
                type: false,
                id_module: null
            },
        });
        resp.send(allDeveloper);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Developer abandonar modulo
router.put("/leave", async (req,res) => {
    try {
        const developer = await Developer.findOne({
            where: {id: req.body.id}
        })
        if(!developer){
            return res.send("usuario inexistente");
        }
        else{
            await developer.update({id_module: null,where:{id:req.body.id}});
            return res.send(developer);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;