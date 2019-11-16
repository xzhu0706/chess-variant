/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    opponent {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
    fen
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      creator {
        id
        username
        points
        skillLevel
        rank
      }
      opponent {
        id
        username
        points
        skillLevel
        rank
      }
      creatorOrientation
      time
      variant
      fen
    }
    nextToken
  }
}
`;
