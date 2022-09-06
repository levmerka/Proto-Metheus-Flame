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
    tracks(
        limit: Int = 20
        genre: [Genres],
        artists: [ID!]
    ): [Track]
    album(id: ID!): Album
    albums(limit: Int = 20): [Album]
    artists(
        limit: Int = 20,
    ): [Artist!]
    artist(id: ID!): Artist
    search(
        term: String = ""
        genre: [Genres]
        limit: Int = 50
    ): [GlobalSearch]
}
  


  type Mutation {
    createTrack(songname: String, artistname: String): Track
  }

  type Mutation {
    createTrack(input: TrackInput!): Track
}

input TrackInput {
    name: String!
    genre: [Genres]!
    artist: [ID!]
    album: ID
}
`;

module.exports = typeDefs;

// input Query {
//   track(id: File!): File
// }
