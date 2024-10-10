import {Client} from 'pg';

const client = new Client({
    connectionString:"postgresql://postgres:**********@localhost/postgres"
})

async function createUserTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE anotherUser (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );       
        `)

        console.log(result);
}

createUserTable();

// docker run -e POSTGRES_PASSWORD=m*se**ret*as*w**d -d -p 5432:5432 postgres
// this command is used to run docker locally using docker
// psql -h localhost -U postgres -d postgres