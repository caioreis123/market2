//tutorial from: https://www.howtographql.com/graphql-js

// import the graphql yoga server:
const { GraphQLServer } = require('graphql-yoga')

//import the Prisma Client instance:
const { prisma } = require('./generated/prisma-client')

//import the data as if it was a database
const { storeProducts: data } = require('../backend2/Data/data2')

// Resolver functions implement the GraphQL schema.
// Tells the server HOW to resolve api operations.
// Each type is an object of the resolvers object.
// Each type field (whether is a root or object field) must have a resolver 
// Resolver are methods of the corresponding mirrored object that runs in each API operation.
// Note that every resolver is an arrow function that can receives to up 4 specific arguments:
//1) root/parent: is the whole data got by the resolver function of the root field that returns an object type and not a scalar type
//2) args: is the arguments passed by the api user. Can serve as the content created in the mutation.
//3) context:is a plain JavaScript object that every resolver can read from and write to 
//-it thus basically is a means for resolvers to communicate. 
//It’s also possible to already write to it at the moment when the GraphQL server itself is being initialized. 
//So, it’s also a way for you to pass arbitrary data or functions to the resolvers.
//4) info:
// Note that the resolver of the root type that return an object type (ex: feed returning Link)
// -gets the whole data of that type (ex: links)
// -while the resolvers of the object type itself (Link) gets each individual data of the object type.
// In order to get this individual data these resolvers utilizes the whole data got by the root resolver as the parent argument.
// Actually the Link resolvers are trivial so can be omitted because the feed resolver is enough.
const resolvers = {
    //********resolvers for the root types:
    Query: {
        all: () => {
            return data
        },
        item: (root, args) => {
            const index = args.id - 1
            return data[index]({
                where: { id: args.id }
            })
        },
    },
    Mutation: {
        add: (root, args) => {
            const index = args.id - 1

            if (data[index].stock > 0) {
                data[index].count += 1
                data[index].stock -= 1
            }
            /* the count variable tracks the items in cart
            while the stock is for the items in the stock */

            return data[index]
        },
        remove: (root, args) => {
            const index = args.id - 1

            if (data[index].count > 0) {
                data[index].count -= 1
                data[index].stock += 1
            }

            return data[index]
        }
    }

    /* Mutation: {
        //THE PRISMA OBJECT IS INSIDE THE CONTEXT OBJECT. THE PRISMA OBJECT IS ACTUALLY THE PRISMA CLIENT THAT IS
        //IMPORTED (top of this document) FROM THE GENERATED PRISMA-CLIENT LIBRARY (npm i prisma-client-lib) AND PUT INSIDE THE
        //CONTEXT ARGUMENT AS THE SERVER STARTS TO RUN (bottom of this document). 
        //This Prisma Client instance lets you access your database through the Prisma API. The Prisma API
        // - exposes a number of methods (like: links(), createLink()) that let you perform CRUD operations for your models.
        //To summarize, Prisma client exposes a CRUD API for the models in your datamodel for you to read and write in your database.
        //These methods are auto-generated based on your model definitions in datamodel.prisma.
        
        post: (root, args, context) => {
            return context.prisma.createLink({
                url: args.url,
                description: args.description,
            })
        },
        deleteLink: (root, args, context) => {
            return context.prisma.deleteLink({
                id: args.id
            })
        },
        updateLink: (root, args, context) => {
            return context.prisma.updateLink({
                data: {
                    url: args.url,
                    description: args.description,
                },
                where: { id: args.id }
            })
        },
        createUser: (root, args, context) => {
            return context.prisma.createUser({
                name: args.name,
                email: args.email,
                password: args.password
            })
        },
    }, */
}

//Instantiate the graphQL server constructor function (class) imported from yoga. 
//Give the server access to the schema and resolvers functions.
//The Prisma Client is getting into the context argument that can be accessed by all the resolvers. The prisma client gives you
//access to the client api with some crud operations that interact with your database.
//Inserting the Prisma Client to the context argument translates the GraphQL operations from the Prisma API into JavaScript functions.
//So now you can you can access context.prisma in your resolvers.
const server = new GraphQLServer({
    typeDefs: './backend2/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
            data
        }
    },
})

//just run the graphQL server
server.start(() => console.log(`Server is running on http://localhost:4000`))