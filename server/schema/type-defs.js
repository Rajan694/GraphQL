const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    year: Int!
    isInfo: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    email: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;

module.exports = {
  typeDefs,
};
