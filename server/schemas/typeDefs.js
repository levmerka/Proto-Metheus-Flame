const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type File {
    _id: ID
    songname: String
    aristname: String
    album name: String
    genre: String
    text: String
  }

  type Query {
    songname: [File]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
