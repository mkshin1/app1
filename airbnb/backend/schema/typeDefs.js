const {gql} = require('apollo-server-express')

const typeDefs = gql `
    type Book {
        title: String
        author: String
        name: String
    }
    type Query {
        books: [Book]
        title: String
    }
   
`

module.exports = typeDefs