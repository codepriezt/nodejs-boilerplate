import {createConnection , getConnection , Connection} from "typeorm"
import Config from '../../ormconfig'

export const databaseConnect = async () => {
   

    //try to get connection

    let connection:Connection 

    try{
        connection = getConnection()

        if(!connection){
            connection = await createConnection(Config)

            console.log("database connected")
        }
    }catch(e){}

}


export const tryConnect = async() =>{

    try{
        await databaseConnect()
        console.log("i con connect");
    }catch(e){
        throw e
    }
}
