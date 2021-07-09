import {gql} from "@apollo/client";

export const ADD_BRAND = gql `
mutation addBrand(
    $name: String!
    $website_url: String!
) {
  addBrand(input: {
    name: $name,
    website_url: $website_url,
  }){
    id : numUids
  }
}
`


export const EDIT_BRAND = gql `
mutation updateBrand(
    $name: String!
    $website_url: String!
    $id: [ID!]
) {
  updateBrand(input: {
    filter: {
      id: $id
    },
    set: {
      name: $name,
      website_url: $website_url,
    }
  }){
    id : numUids
  }
}
`

export const REMOVE_BRAND = gql `
mutation deleteBrand(
    $id: [ID!]
) {
  deleteBrand(filter: {
    id: $id
  }){
    id : numUids
  }
}
`
