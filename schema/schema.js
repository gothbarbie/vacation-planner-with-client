const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLList } = graphql
const mongoose = require('mongoose')
const User = mongoose.model('users')
const Vacation = mongoose.model('vacations')

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

const VacationType = new GraphQLObjectType({
  name: 'Vacation',
  fields: {
    id: { type: GraphQLString },
    author: { 
      type: UserType,
      async resolve(parentValue, args) {
        const user = await User.findOne({ 
          _id: parentValue.author 
        })
        if (user) return user
        return
      }
    },
    arrival: { type: GraphQLString },
    departure: { type: GraphQLString },
    people: { type: new GraphQLList(GraphQLString) },
    created: { type: GraphQLString }
  }
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
        if (user) return user
        return
      },
    },
    vacation: {
      type: VacationType,
      args: { id: { type: GraphQLString } },
      async resolve(parentValue, args) {
        const vacation = await Vacation.findOne({
          _id: args.id
        })
        if (vacation) return vacation
        return
      }
    }
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
