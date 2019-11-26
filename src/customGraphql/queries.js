/* eslint-disable */

// Get explicit past games objects while getting user info
export const getUserWithPastGames = `query GetUser($id: ID!) {
	getUser(id: $id) {
	  id
	  username
	  email
	  phoneNumber
	  pastGames {
      items {
        game {
          id
          players {
            items {
              id
            }
            nextToken
          }
          creator {
            id
            username
          }
          opponent {
            id
            username
          }
          creatorOrientation
          time
          variant
          fen
          available
          history
          result
          winner
        }
      }
		  nextToken
	  }
	  points
	  skillLevel
	  rank
	}
}
`;

// Get explicit player objects with needed fields while getting game info
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    players {
      items {
        player {
          id
          username
          points
          skillLevel
          rank
        }
      }
      nextToken
    }
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    creatorOrientation
    time
    variant
    fen
    available
    history
    result
    winner
  }
}
`;

// Get explicit player objects with needed fields while listing game info
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      players {
        items {
          player {
            id
            username
            points
            skillLevel
            rank
          }
        }
        nextToken
      }
      creator {
        id
        username
      }
      creatorOrientation
      time
      variant
      available
    }
    nextToken
  }
}
`;