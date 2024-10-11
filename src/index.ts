import {Client} from 'pg';

const client = new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUserTable(){
    await client.connect()
    const result = await client.query(`
        INSERT INTO address (user_id, city, country, street, pincode) VALUES (2, 'JAMAICA', 'AFRICA', '123 Broadway St', '10101');       
        `)

        console.log(result);
}

createUserTable();

// delete cascade = means it user will delete then it's address will also be deleted