const express = require("express");
const router = express.Router();
const {Module, Requirement, Project} = require("../models");

router.get("/",async (req,resp) => {
    try {
        const allModule = await Module.findAll();
        resp.send(allModule);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

//Registro Module (auxiliar)
router.post("/register",async (req,res) =>{
    try {
        //se crea el module
        const module = await Module.create({
            name: req.body.name,
            view: req.body.view,
            deadline: req.body.deadline,
            assignment: req.body.assignment,
            check: req.body.check,
            id_project: req.body.id_project,
        });
        return res.send(module);
    } catch (error) {
        return res.status(400).send(error);
    }
});

//Listar Modules de un Project
router.post("/listModule",async (req,resp) => {
    try {
        const module = await Module.findAll({
            where: {
                id_project: req.body.id_project,
            },
        });
        resp.send(module);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Modificar Module
router.put("/modifyModule", async (req,res) => {
    try {
        const module = await Module.findOne({
            where: {id: req.body.id_module}
        })
        if(!module){
            res.status(400).send("Modulo inexistente");
        }
        else{
            if(req.body.feedback != null){
                await module.update({feedback: req.body.feedback,where:{id:req.body.id_module}});
            }
            if(req.body.view != null){
                await module.update({view: req.body.view,where:{id:req.body.id_module}});
            }
            if(req.body.check != null){
                try {
                    const requirementTotal = await Requirement.findAll({
                        where: {id_module: req.body.id_module}
                    });
                    const requirementFinish = requirementTotal.filter(x => x.state=="Finalizado");
                    if(requirementTotal.length === 0){
                        await module.update({check: 0,where:{id:req.body.id_module}});
                    }
                    else if(requirementTotal.length === requirementFinish.length){
                        await module.update({check: req.body.check,where:{id:req.body.id_module}});
                    }
                    else{
                        res.send("check is null");
                    }
                } catch (error) {
                    res.status(400).send("Error");
                }
            }
            if(req.body.assignment != null){
                await module.update({assignment: req.body.assignment,where:{id:req.body.id_module}});
            }
            return res.send(module);
        }
    } catch (error) {
        res.status(400).send("Error");
    }
});

//Obtener los datos de un módulo
router.post("/getModule",async (req,res) =>{
    try {
        const module = await Module.findOne({
            where: {
                id: req.body.id,
            },
        });
        res.send(module);
    } catch (error) {
        resp.status(400).send("Error al hacer una query a la base de datos");
    }
});

//Listar módulos no asignados
router.get("/listUnassign",async (req,resp) => {
    try {
        const allModule = await Module.findAll({
            where: {
                assignment: false,
                check: false
            }
        });
        resp.send(allModule);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

//Desasignar modulo
router.put("/unAssign", async (req,res) => {
    try {
        const module = await Module.findOne({
            where: {
                id: req.body.id
            },
        })
        if(!module){
            res.status(400).send("Modulo inexistente");
        }
        else{
            await module.update({assignment: false,where:{id:req.body.id}});
            return res.send(module);
        }
    } catch (error) {
        res.status(400).send("Error");
    }
});

//Modificar check de Module
router.put("/modifyCheck", async (req,res) => {
    try {
        const module = await Module.findOne({
            where: {id: req.body.id_module}
        })
        if(!module){
            res.status(400).send("check is null");
        }
        else{
            if(req.body.check != null){
                try {
                    const requirementTotal = await Requirement.findAll({
                        where: {id_module: req.body.id_module}
                    });
                    const requirementFinish = requirementTotal.filter(x => x.state=="Finalizado");
                    if(requirementTotal.length === 0){
                        res.send("check is null");
                    }
                    else if(requirementTotal.length === requirementFinish.length){
                        await module.update({check: req.body.check,where:{id:req.body.id_module}});
                        // se realiza la llamada para obtener la lista de todos los módulos del mismo proyecto
                        try {
                            const listModules = await Module.findAll({
                                where: {
                                    id_project: module.id_project,
                                },
                            });
                            // se crea una lista filtrada solo con los módulos terminados del mismo proyecto
                            const listModulesFinish = listModules.filter(y => y.check==1);
                            // si la lista anterior es igual a la lista total de los módulos del mismo proyecto entonces el proyecto esta terminado
                            if(listModules.length === listModulesFinish.length){
                                console.log("FINALIZADO")
                                //se actualiza el estado del proyecto a "Finalizado"
                                try {
                                    const project = await Project.findOne({
                                        where: {id: module.id_project}
                                    })
                                    await project.update({state: "Finalizado",where:{id:module.id_project}});
                                } catch (error) {
                                        res.send(error);
                                }
                            }
                        } catch (error) {
                            resp.status(400).send("Error al hacer una query a la base de datos");
                        }
                    }
                    else{
                        res.send("check is null");
                    }
                } catch (error) {
                    res.status(400).send("Error");
                }
            }
            return res.send(module);
        }
    } catch (error) {
        res.status(400).send("Error");
    }
});

module.exports = router;