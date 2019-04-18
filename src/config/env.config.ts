export const conn = {
  uri: <string>process.env.PSQL_DB_URI,
  logging: false
};

export const server = {
  port: parseInt(<string>process.env.PORT)
};
