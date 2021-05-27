import { gql, useQuery } from '@apollo/client'
import { ViewerQuery } from '../generated-flat-schema'

const viewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`

const FooNextPage = () => {
  const { data } = useQuery<ViewerQuery>(viewerQuery)

  if (data?.viewer) {
    data.viewer.id
    data.viewer.name
    data.viewer.status
    // NG
    //data.viewer.foo
    data.viewer.name.startsWith('a')
    // NG
    //data.viewer.name.toFixed()
  }
}
