const jwt = require("jsonwebtoken");

function verifySignD(req,res,nxt){
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("no tienes autorizado entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.developer = payload;
        nxt();        
    } catch (error) {
        return res.status(401).send("no tienes autorizado entrar");
    }
}

function verifySignC(req,res,nxt){
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("no tienes autorizado entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.client = payload;
        nxt();        
    } catch (error) {
        return res.status(401).send("no tienes autorizado entrar");
    }
}

function verifySignM(req,res,nxt){
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("no tienes autorizado entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.manager = payload;
        nxt();        
    } catch (error) {
        return res.status(401).send("no tienes autorizado entrar");
    }
}
