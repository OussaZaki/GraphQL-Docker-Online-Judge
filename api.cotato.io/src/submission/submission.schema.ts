import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} from "graphql";

import { Judge } from "../judge/judge";

let SUBMISSIONs = [];
const judge = new Judge();

//////////////////
//     Type     //
//////////////////
const SubmissionType = new GraphQLObjectType({
    name: 'submission',
    fields: function () {
        return {
            id: {
                type: GraphQLString,
                description: 'Submission id'
            },
            code: {
                type: GraphQLString,
                description: 'Submission code source to be executed'
            },
            status: {
                type: GraphQLInt,
                description: 'Submission status'
            }
        };
    }
});

//////////////////
//  QueryType   //
//////////////////
const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        submissions: {
            type: new GraphQLList(SubmissionType),
            resolve: () => SUBMISSIONs
        }
    })
});

//////////////////
//  Mutations   //
//////////////////
const newSubmissionMutation = {
    type: new GraphQLList(SubmissionType),
    description: 'Add a Subsmission',
    args: {
        code: {
            name: 'Submission code source',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, args) => {
        SUBMISSIONs.push({
            id: (new Date()).getTime().toString(),
            code: args.code,
            status: 0
        });
        judge.runCode("hello", args.code);
        return SUBMISSIONs;
    }
};

//////////////////
// MutationType //
//////////////////
const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        newSubmission: newSubmissionMutation
    }
});

export const submissionSchema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});