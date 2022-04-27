# hh-test-be

A backend environment for the Helpful Human Take Home Backend Test. This project will encompass the handling of color data between the database and the user.

This project utilizes many technologies such as Node.js, Apollo Server, MongoDB & GraphQL.

This project is hosted on Heroku @ https://helpful-human-be.herokuapp.com/

### Testing on Postman

URL: https://helpful-human-be.herokuapp.com/
Type: POST
Body: GraphQL

Definition / Schema:
schema {
query: Query
mutation: Mutation
}
type Color {
id: ID!
name: String!
colorValue: String!
}

type Query {
colors: [Color]
}

input CreateColor {
name: String!
colorValue: String!
}

input UpdateColor {
name: String!
colorValue: String!
}

type DeleteColor {
id: ID!
}

type Mutation {
createColor(input: CreateColor!): Color!
updateColor(id: ID, input: UpdateColor!): Color!
deleteColor(id: ID): DeleteColor!
}

Sample Calls:
Query
query colors {
colors {
id
name
colorValue
}
}

Mutation
mutation createColor ($input: CreateColor!) {
createColor (input: $input) {
id
name
colorValue
}
}

GraphQL Variables:
{
"input": {
"name": "LightGray",
"colorValue": "D3D3D3"
}
}
