import { gql } from '@apollo/client'

const updateUserNameMutation = gql`
  mutation UpdateUserNameMutation($name: String!) {
    updateUserName(name: $name) {
      name
    }
  }
`
