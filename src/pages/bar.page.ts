import { gql } from 'dummy-apollo-client'

const updateUserNameMutation = gql`
  mutation UpdateUserNameMutation($name: String!) {
    updateUserName(name: $name) {
      name
    }
  }
`
