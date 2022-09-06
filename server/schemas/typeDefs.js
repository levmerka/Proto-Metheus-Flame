const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    library: [File]
  }

  type File {
    _id: ID!
    songname: String
    artistname: String
    albumname: String
    genre: String
    text: String
  }

  type Query {
    username: [User]
    songname: [File]
    artistname: [File]
    albumname: [File]
    genre: [File]
    text: [File]
    track(id: File!): File
  }

  type Mutation {
    createFile(songname: String, artistname: String): File
  }
`;

module.exports = typeDefs;
