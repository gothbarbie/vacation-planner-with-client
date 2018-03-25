const graphql = require('graphql')
const { GraphQLList, GraphQLObjectType, GraphQLString } = graphql
const mongoose = require('mongoose')

const User = mongoose.model('users')
const Vacation = mongoose.model('vacations')

const UserType = require('./userType')
const VacationType = require('./vacationType')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    auth: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      },
    },
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
    vacations: {
      type: new GraphQLList(VacationType),
      args: {},
      async resolve(parentValue, args) {
        const vacations = await Vacation.find()
        if (vacations) return vacations
        throw new Error('No vacations found')
      },
    },
  },
})

module.exports = RootQueryType
