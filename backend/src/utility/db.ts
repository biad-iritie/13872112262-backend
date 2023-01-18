import {Pool} from 'pg';

const pool = new Pool({
    user: "postgres",
    database: "sequioa",
    password: "admin",
    port: 5432,
    host: "localhost"
  
})

export default pool;