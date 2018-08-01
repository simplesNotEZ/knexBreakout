//runs this (exports.up) when you migrate:latests
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cat_breeds', function(table) {
        table.increments();
        table.text('breed');
        table.integer('popularity');
    })
};

//runs this (exports.down) when you migrate:rollback
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cat_breeds');
};
