const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const jwt =  require('jsonwebtoken')
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const { JWT_SECRET, PORT } = process.env || 3001;
const app = express();
const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET)
    }
    return null
  } catch (error) {
    return null
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.get('Authorization') || ''
    return { user: getUser(token.replace('Bearer', ''))}
  },
  introspection: true,
  playground: true
})
;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
