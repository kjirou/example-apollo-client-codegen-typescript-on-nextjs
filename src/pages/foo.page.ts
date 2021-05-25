// `import { gql } form '@apollo/client'`
const gql: any = () => {}

const viewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`
