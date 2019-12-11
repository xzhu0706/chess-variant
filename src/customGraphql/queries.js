/* eslint-disable */

export const getUserByUsername = `query GetUserByUsername(
  $username: String
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      username
      pastGames(sortDirection: DESC) {
        items {
          game {
            id
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
      createdAt
      variants(sortDirection: DESC) {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          updatedAt
        }
        nextToken
      }
    }
    nextToken
  }
}
`;

export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      points
      skillLevel
      rank
    }
    nextToken
  }
}
`;

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
    ended
    time
    variant
    fen
    available
    history
    result
    winner
    createdAt
    messages {
      items {
        id
        author {
          id
          username
        }
        content
        createdAt
      }
      nextToken
    }
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
      opponent {
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

export const listComplaints = `query ListComplaints(
  $filter: ModelComplaintFilterInput
  $limit: Int
  $nextToken: String
) {
  listComplaints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        email
      }
      reportedUser {
        id
        username
        email
      }
      gameLink
      content
      processed
      processedBy {
        id
        username
      }
      result
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;