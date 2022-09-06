const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    library: [Track]
  }

  type Track {
    _id: ID!
    songname: String
    artistname: String
    albumname: String
    genre: [Genres]
    text: String
  }

  type Album {
    _id: ID!
    albumname: String!
  }

  type Artist {
    _id: ID!
    artistname: String!
  }
  type Genres {
    _id: ID!
    genre: String!
  }
  type GlobalSearch {
    search: String!
  }

  type Query {
    username: [User]
    songname: [Track]
    artistname: [Track]
    albumname: [Track]
    genre: [Track]
    text: [Track]
  }
  type Query {
    track(id: ID!): Track
    track(limit: Int = 20, artist: [ID!]): Track
    album(id: ID!): Album
    album(limit: Int = 20): Album
    artist(limit: Int = 20): Artist!
    artist(id: ID!): Artist
    search(term: String = "", limit: Int = 50): GlobalSearch
  }

  type Mutation {
    createTrack(songname: String, artistname: String): Track
  }

  type Mutation {
    createTrack(input: TrackInput!): Track
  }

  input TrackInput {
    trackname: String!
    genre: String
    artist: String
    album: String
  }
`;

module.exports = typeDefs;

// input Query {
//   track(id: File!): File
// }
