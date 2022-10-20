const { GraphQLServer, PubSub } = require("graphql-yoga");

const pubsub = new PubSub();        //publication subscriptions api to be used

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    text: String!
  }
  type Query {
    messages: [Message!]
  }
  type Mutation {
    postMessage(user: String!, text: String!): ID!
  }
  type Subscription {
    messages: [Message!]
  }
`;
