import { gql } from 'dummy-apollo-client'

const viewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`
