module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/liminal',
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  }
};
