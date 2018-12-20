import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello() {
      return "Hello World!";
    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // Allow graphql client to run introspection query. Don't do this in prod.
  introspection: true
});
export default apolloServer.createHandler();
