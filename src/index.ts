import {Client} from 'pg';

const client = new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUserTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );       
        `)

        console.log(result);
}

createUserTable();

// docker run -e POSTGRES_PASSWORD=m*se**ret*as*w**d -d -p 5432:5432 postgres
// this command is used to run docker locally using docker
// psql -h localhost -U postgres -d postgres