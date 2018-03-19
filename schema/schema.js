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

const RootQuery = require('./types/rootQueryType')
const mutation = require('./mutations')
const UserType = require('./types/userType')
const VacationType = require('./types/vacationType')

// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addUser: {
//       type: UserType,
//       args: {
//         email: { type: new GraphQLNonNull(GraphQLString) },
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         password: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       async resolve(parentValue, { email, firstName, lastName, password }) {
//         const user = await User.register(
//           {
//             email: email,
//             firstName: firstName,
//             lastName: lastName,
//             active: false,
//           },
//           password
//         )
//         if (user) return user
//         throw new Error('User could not be added', {
//           email,
//           firstName,
//           lastName,
//           password,
//         })
//       },
//     },
//     deleteUser: {
//       type: UserType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       async resolve(parentValue, { id }) {
//         const user = await User.findOneAndRemove({ _id: id })
//         if (user) return user
//         throw new Error('User could not be deleted', id)
//       },
//     },
//     editUser: {
//       type: UserType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLString) },
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//       },
//       async resolve(parentValue, { id, firstName, lastName }) {
//         const user = await User.findOneAndUpdate(
//           { _id: id },
//           {
//             firstName,
//             lastName,
//           },
//           { new: true, runValidators: true }
//         ).exec()

//         if (user) return user
//         throw new Error('User could not be updated', id)
//       },
//     },
//     addVacation: {
//       type: VacationType,
//       args: {
//         author: { type: new GraphQLNonNull(GraphQLString) },
//         arrival: { type: new GraphQLNonNull(GraphQLString) },
//         departure: { type: new GraphQLNonNull(GraphQLString) },
//         people: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
//       },
//       async resolve(parentValue, { author, arrival, departure, people}) {
//         const now = new Date()

//         const vacation = new Vacation({
//           author,
//           arrival,
//           departure,
//           people,
//           created: now.toISOString()
//         })
//         await vacation.save()
//         if (vacation) return vacation 
//         throw new Error('Could not add Vacation', { author, arrival, departure, people })
//       }
//     },
//     deleteVacation: {
//       type: VacationType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       async resolve(parentValue, { id }) {
//         const vacation = await Vacation.findOneAndRemove({ _id: id })
//         if (vacation) return vacation 
//         throw new Error('Vacation could not be deleted', id)
//       }
//     },
//     editVacation: {
//       type: VacationType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLString) },
//         arrival: { type: GraphQLString },
//         departure: { type: GraphQLString },
//         people: { type: new GraphQLList(GraphQLString) },
//       },
//       async resolve(parentValue, { id, arrival, departure, people }) {
//         const vacation = await Vacation.findOneAndUpdate({ _id: id }, {
//           arrival,
//           departure,
//           people,
//         }, { new: true, runValidators: true }).exec()

//         if (vacation) return vacation 
//         throw new Error('Vacation could not be updated', id, { arrival, departure, people })
//       }
//     }
//   },
// })

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
})
