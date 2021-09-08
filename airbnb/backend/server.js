const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const resolvers = require('./schema/resolvers')
const typeDefs = require('./schema/typeDefs')

async function startServer() {
    const app = express()
    const apolloServer = new ApolloServer({typeDefs, resolvers})

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app})

    app.listen(4000, () => {
        console.log(`server is running on port 4000`)
    })

}
startServer()