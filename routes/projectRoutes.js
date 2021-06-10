const express = require("express");
const router = express.Router();
const {Project, Module} = require("../models");

// obtener la lista de proyectos
router.get("/",async (req,resp) => {
    try {
        const allProject = await Project.findAll();
        resp.send(allProject);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

// registrar un proyecto
router.post("/register",async (req,res) =>{
    try {
        //se crea el project
        const project = await Project.create({
            name: req.body.name,
            state: req.body.state,
            id_manager: req.body.id_manager,
            id_client: req.body.id_client,
        });
        return res.send(project);
    } catch (error) {
        return res.status(400).send(error);
    }
});

// obtener un proyecto
router.post("/getProject",async (req,res) =>{
    try {
        const project = await Project.findOne({
            where: {
                id: req.body.id,
            },
        });
        res.send(project);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Modificar Project
router.put("/modify", async (req,res) => {
    try {
        const project = await Project.findOne({
            where: {id: req.body.id}
        })
        if(!project){
            return res.send("usuario inexistente");
        }
        else{
            if(req.body.name != null){
                await project.update({name: req.body.name,where:{id:req.body.id}});
            }
            if(req.body.state != null){
                await project.update({state: req.body.state,where:{id:req.body.id}});
            }
            if(req.body.id_manager != null){
                await project.update({id_manager: req.body.id_manager,where:{id:req.body.id}});
            }
            return res.send(project);
        }
    } catch (error) {
        res.send(error);
    }
});

// obtener la lista de proyectos
router.get("/projectU",async (req,resp) => {
    try {
        const allModule = await Module.findAll({
            where: {
                assignment: false,
                check: false
            }
        });
        var dicc = new Map();
        allModule.map( m => {
            dicc[m.id_project] = 1;
        })
        resp.send(dicc);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

//Eliminar estado de proyecto
router.put("/deleteState", async (req,res) => {
    try {
        const project = await Project.findOne({
            where: {id: req.body.id}
        })
        if(!project){
            return res.send("usuario inexistente");
        }
        else{
            await project.update({state: null,where:{id:req.body.id}});
            return res.send(project);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;