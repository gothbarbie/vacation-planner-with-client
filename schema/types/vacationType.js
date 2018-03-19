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
const Vacation = mongoose.model('vacations')

const UserType = require('./userType')

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

module.exports = VacationType
