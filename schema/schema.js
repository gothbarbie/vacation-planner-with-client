const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema } = graphql
const mongoose = require('mongoose')
const User = mongoose.model('users')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    googleId: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    active: { type: GraphQLBoolean },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      async resolve(parentValue, args) {
        const user = await User.findOne({ 
          _id: args.id 
        })
        
        if (user) {
          return user
        }
        return
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
