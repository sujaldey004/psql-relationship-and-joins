"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        INSERT INTO address (user_id, city, country, street, pincode) VALUES (2, 'JAMAICA', 'AFRICA', '123 Broadway St', '10101');       
        `);
        console.log(result);
    });
}
createUserTable();
// docker run -e POSTGRES_PASSWORD=m*se**ret*as*w**d -d -p 5432:5432 postgres
// this command is used to run docker locally using docker
// psql -h localhost -U postgres -d postgres
