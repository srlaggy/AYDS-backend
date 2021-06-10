const express = require("express");
const router = express.Router();
const {Client, Manager, Developer} = require("../models");

//Detectar tipo de usuario
router.post("/", async (req,res) =>{
    try {
        //cliente 1 | manager 2 | developer 3
        //var tipo = 0;
        const emailValidClient = await Client.findOne({
            where:{
                email: req.body.email,
            },
        });
        const emailValidManager = await Manager.findOne({
            where:{
                email: req.body.email,
            },
        });
        const emailValidDeveloper = await Developer.findOne({
            where:{
                email: req.body.email,
            },
        });

        //Redirecciono al metodo post correspondiente
        if(emailValidClient){
            //tipo = 1,
            res.redirect(307, "client/login")
        }
        else if(emailValidManager){
            //tipo = 2,
            res.redirect(307, "manager/login")
        }
        else if(emailValidDeveloper){
            //tipo = 3,
            res.redirect(307, "developer/login")
        }
        else return res.status(400).send("El usuario no existe");

    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;