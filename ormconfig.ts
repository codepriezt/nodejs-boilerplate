import {ConnectionOptions} from "typeorm"

const Config: ConnectionOptions =  {
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Collect12345$",
    synchronize:false,
    database: "cupid_education",
    "entities": ["src/database-entities/*.ts"],
    "migrations": ["migration/*.ts"],
    "cli": {
        "migrationsDir": "migration"
    }
};

export default Config;


