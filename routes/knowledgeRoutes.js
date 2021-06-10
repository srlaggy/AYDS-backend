const express = require("express");
const router = express.Router();
const {Knowledge} = require("../models");

router.get("/",async (req,resp) => {
    try {
        const allKnowledge = await Knowledge.findAll();
        resp.send(allKnowledge);
    } catch (error) {
        resp.statusCode(400).send("Error al hacer una query a la base de datos");
    }
});

module.exports = router;