import { gql } from '@apollo/client'

const viewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`
