exports.up = async (knex) => {
  await knex.schema.createTable('member', table => {
    table.increments('id').primary();
    table.string('email');
    table.string('googleId');
    table.string('displayName');
    table.string('avatarUrl');
    table.string('admin');
    table.string('active');
  });

  await knex.schema.createTable('place', table => {
    table.increments('id').primary();
    table.double('centerLat');
    table.double('centerLong');
    table.string('name');
    table.string('address');
    table.text('description');
    table.boolean('live');
    table.boolean('pending');
    table.boolean('denied');
    table.integer('creatorId').references('member.id');
  });

  await knex.schema.createTable('member_place', table => {
    table.increments('id').primary();
    table.integer('placeId')
      .unsigned()
      .notNullable()
      .references('place.id')
      .onDelete('cascade');
    table.integer('memberId')
      .unsigned()
      .notNullable()
      .references('member.id')
      .onDelete('cascade');
  })

  await knex.schema.createTable('category', table => {
    table.increments('id').primary();
    table.string('name');
  });

  await knex.schema.createTable('place_category', table => {
    table.increments('id').primary();
    table.integer('placeId')
      .unsigned()
      .notNullable()
      .references('place.id')
      .onDelete('cascade');
    table.integer('categoryId')
      .unsigned()
      .notNullable()
      .references('category.id')
      .onDelete('cascade');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('place_category');
  await knex.schema.dropTable('member_place');
  await knex.schema.dropTable('category');
  await knex.schema.dropTable('place');
  await knex.schema.dropTable('member');
};
