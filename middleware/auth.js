const jwt = require('jsonwebtoken')
const JWT_SECRET = "5c[Q2brtv5_s`h#PyYB<QP}{RBr;LWXFzY>8,hsgf{$V.<THnY";

const auth = (req, res, next) =>{
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})

        jwt.verify(token, JWT_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: "Invalid Authentication"})

            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth