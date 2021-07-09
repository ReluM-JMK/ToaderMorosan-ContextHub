import {gql} from "@apollo/client";

export const LOAD_BRANDS = gql `
query{
  queryBrand{
    name,
    id,
    website_url
  }
}
`