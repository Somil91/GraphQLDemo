const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Subscription = require('./resolvers/Subscription');


const resolvers = {
    Query,
    Mutation,
    AuthPayload,
    Subscription
}

//3 
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req, 
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'https://eu1.prisma.sh/somil-kumar-f23817/database/dev',
            secret: 'mysecret235',
            debug: true,
        })
    }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))


    //         const link = {
    //             id: `link-${idCount++}`,
    //             description: args.description,
    //             url:args.url,
    //         }
    //         links.push(link)
    //         return link
    //     },

    //     updateLink: (root, args) => {
    //         let record = null;
    //         links = links.map((link) => {
    //             if(link.id === args.id) { 
    //                 link.url = args.url ? args.url : link.url; 
    //                 link.description = args.description ? args.description : link.description; 
    //                 record = link;
    //             }
    //             return link;
    //         });
    //         return record ;
    //     },

                
    //     deleteLink: (root, args) => {
    //         let record = null;
    //         filteredLinks =  links.filter((record) => (record.id === args.id));

    //         if(filteredLinks.length > 0) {
    //             let deletedLink = filteredLinks.length > 0 ? filteredLinks[0] : null;
    //             let tempLinks = links.filter((record)=> (record.id !== args.id));
    //             let counter = 0;
    //             links = tempLinks.map((link) => {
    //                 link.id = `link-${counter++}`;
    //                 return link;
    //             });
    //             record = filteredLinks[0];
    //         }
    //         return record;
    //     }
    // },

    // Link: {
    //     id: (root) => root.id,
    //     description: (root) => root.description,
    //     url: (root) => root.url,
    // }



    /*
    const resolvers = {
    Query: {
        info: () => `This is the API of a hackernews clone`,
        feed: (root, args, context, info) => {
            return context.db.query.links({}, info)
        }
    },

    Mutation: {
        createLink: (root, args, context, info) => {
            return context.db.mutation.createLink({
                data: {
                    url: args.url,
                    description: args.description,
                },
            }, info )
        }, 
    }

}

    **/