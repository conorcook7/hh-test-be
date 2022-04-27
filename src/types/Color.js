const { gql } = require("apollo-server");

module.exports = gql`
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
    updateColor(id: ID!, input: UpdateColor!): Color!
    deleteColor(id: ID!): DeleteColor!
  }
`;
