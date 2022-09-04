const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
  }

  type File {
    _id: ID!
    songname: String
    aristname: String
    albumname: String
    genre: String
    text: String
  }

  type Query {
    text: [File]
  }

  type Mutation {
    createFile(songname: String, artistname: String): File
  }
`;

module.exports = typeDefs;
