const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const schema = require('./schema');
const {getLocation} = require('./resolver');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    location: getLocation,
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = startStandaloneServer(server, {
    listen: { port: 3004 },
  });
console.log(`🚀 Server ready at ${url}`);