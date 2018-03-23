const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql
const mongoose = require('mongoose')
const User = mongoose.model('users')

const UserType = require('./types/userType')
const authController = require('../controllers/authController')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { 
        email, firstName, lastName, password 
      }, req) {
       return authController.signup({ email, firstName, lastName, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req 
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return authController.login({ email, password, req })
      }
    }
  },
})

module.exports = mutation
