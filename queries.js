const database = require("./database-connection.js");

const getAll = () => {
    return database('cat_breeds').select();
}

module.exports = {
    getAll
}