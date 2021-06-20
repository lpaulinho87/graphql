const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
// mongoose.connect('mongodb://root:root@rootlocalhost:27017/graphqlnode?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// mongoose.connection.once('once', function(){
//   console.log('connection has been made');
// }).on('error', function(error){
//   console.log('error is', error);
// });

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start();