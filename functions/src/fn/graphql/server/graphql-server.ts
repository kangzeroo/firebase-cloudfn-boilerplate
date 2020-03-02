const { ApolloServer } = require('apollo-server-cloud-functions')

import schema from './schema'
import resolvers from './resolvers'

/**
 * [[PROD CHECKLIST]] turn on `cors { credentials: true }`
 * see [github:apollo-server-cloud-functions](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-cloud-functions) for more details
 */
const graphqpl = () => {
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        introspection: true,
        playground: true,
        // @ts-ignore
        context: ({ req, res }) => ({
            headers: req.headers,
            req,
            res,
        }),
    })
    return server.createHandler({
        cors: {
            origin: '*',
            credentials: false,
        },
    })
}

export default graphqpl
