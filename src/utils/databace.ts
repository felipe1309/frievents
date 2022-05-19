import {config} from './config'
import { connect,connection,connections } from "mongoose";
if (connections.length !== 0 ) {
    connect(config.MONGOOSE_URL)
}
connection.on('connected',()=>{
    console.log('is connected!!')
})
