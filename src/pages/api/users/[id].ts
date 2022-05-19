import jwt from "jsonwebtoken"
import { NextApiHandler } from "next";
import Users from "../../../models/Users";
import '../../../utils/databace'

const handdler:NextApiHandler = async(req,res)=>{
    const {method,body,headers,query} = req
    switch (method) {
        case "GET":
            const user = await Users.findOne({_id:query.id,email:body.email})
            if (typeof process.env.SECRET_JWT == "string" && user && user.validatePassword(body.password)) {
                const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT, {
                  expiresIn: 60 * 60 * 24,
                });
                return res.status(201).json({auth:true,token:token})
              }
            return res.status(201).json({meassage:"auth not or token invalid"})
        case "PUT":
            const userUpdate = await Users.findByIdAndUpdate(query.id,body)
            return res.status(201).json(userUpdate)
        case "DELETE":
            const userDelete = await Users.findByIdAndDelete(query.id)
            return res.status(301).json({msg:"deleted"})
        default:
            return res.status(401).json({msg:"method is not soported"})
    }
}
export default handdler
