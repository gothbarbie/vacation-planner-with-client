const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql
const mongoose = require('mongoose')
const User = mongoose.model('users')

const UserType = require('./types/userType')

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
      async resolve(
        parentValue,
        { email, firstName, lastName, password },
        req
      ) {
        const user = await User.register(
          {
            email: email,
            firstName: firstName,
            lastName: lastName,
            active: false,
          },
          password
        )
        if (user) {
          return new Promise((resolve, reject) => {
            req.logIn(user, (err) => {
              if (err) { reject(err )}
              resolve(user)
            })
          })
        }
        throw new Error('User could not be added', {
          email,
          firstName,
          lastName,
          password,
        })
      },
    },
  },
})

module.exports = mutation
