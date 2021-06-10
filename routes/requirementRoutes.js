const express = require("express");
const router = express.Router();
const {Module, Requirement} = require("../models");

router.get("/",async (req,resp) => {
    try {
        const allRequirement = await Requirement.findAll();
        resp.send(allRequirement);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

router.get("/requirementMap",async (req,resp) => {
    try {
        const allModules = await Module.findAll();
        try {
            var allRequirement = await Requirement.findAll();
            var diccionario = new Map();
            allModules.map(m => {
                diccionario[m.id] = allRequirement.filter(r => m.id==r.id_module);
            });
            resp.send(diccionario);
        } catch (error) {
            resp.statusCode(400).send("Error al hacer una query a la base de datos");
        }
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

router.post("/getRequirement", async (req, resp) => {
    try {
        const allRequirements = await Requirement.findAll({
            where:{
                id_module: req.body.id,
            },
        });
        resp.send(allRequirements);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

router.put("/modifyState", async (req,res) => {
    try {
        const requirement = await Requirement.findOne({
            where: {id: req.body.id}
        })
        if(!requirement){
            return res.send("usuario inexistente");
        }
        else{
            if(req.body.state != null){
                await requirement.update({state: req.body.state,where:{id:req.body.id}});
            }
            return res.send(requirement);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;