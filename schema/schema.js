const graphql = require('graphql')
const {
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = graphql
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
    salt: { type: GraphQLString },
    hash: { type: GraphQLString },
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
          _id: parentValue.author,
        })
        if (user) return user
        return
      },
    },
    arrival: { type: GraphQLString },
    departure: { type: GraphQLString },
    people: { type: new GraphQLList(GraphQLString) },
    created: { type: GraphQLString },
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
          _id: args.id,
        })
        if (user) return user
        throw new Error('No user found', args.id)
      },
    },
    vacation: {
      type: VacationType,
      args: { id: { type: GraphQLString } },
      async resolve(parentValue, args) {
        const vacation = await Vacation.findOne({
          _id: args.id,
        })
        if (vacation) return vacation
        throw new Error('No vacation found', args.id)
      },
    },
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { email, firstName, lastName, password }) {
        const user = await User.register({
          email: email,
          firstName: firstName,
          lastName: lastName,
          active: false,
        },
        password)
        
        return user 
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})
