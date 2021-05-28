import Mysql, {createConnection} from 'mysql2/promise'

async function initConnection() {
    const connection = createConnection({host:'localhost', user: 'root', database: 'discord'});
    console.log(`[DATABASE] Started.`)
}


export { initConnection }

