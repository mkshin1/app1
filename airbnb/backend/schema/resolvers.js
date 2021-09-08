const books = require('../sample_db')

// where the query is matching against. aka the database
const resolvers = {
    Query: {
        books: () => books
        },
    

    
    }

module.exports = resolvers