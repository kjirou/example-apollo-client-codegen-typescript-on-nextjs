import { gql, useQuery } from '@apollo/client'
import { UpdateUserNameMutation, UpdateUserNameMutationVariables } from '../generated-flat-schema'

const updateUserNameMutation = gql`
  mutation UpdateUserNameMutation($name: String!) {
    updateUserName(name: $name) {
      name
    }
  }
`

const BarNextPage = () => {
  const { data } = useQuery<UpdateUserNameMutation, UpdateUserNameMutationVariables>(
    updateUserNameMutation,
    // NOTE: "variables" is optional.
    //       Therefore, removing this argument does not cause any type error.
    {
      variables: {
        name: 'Taro',
        // NG
        //foo: 'Jiro',
      }
    }
  )

  if (data?.updateUserName) {
    data.updateUserName.name
    // NG
    //data.updateUserName.status
  }
}
