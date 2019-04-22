export const conn = {
  uri: <string>process.env.PSQL_DB_URI,
  sync: {
    // schema: 'public'
  },
  logging: false
};

export const server = {
  port: parseInt(<string>process.env.PORT)
};
