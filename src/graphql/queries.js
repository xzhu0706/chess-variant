/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    players {
      items {
        id
        game {
          id
          players {
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
          ended
          history
          result
          winner
          createdAt
          messages {
            nextToken
          }
        }
        player {
          id
          username
          email
          phoneNumber
          pastGames {
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
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
    ended
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
        game {
          id
          players {
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
          ended
          history
          result
          winner
          createdAt
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
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
      players {
        items {
          id
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
          player {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
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
      ended
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
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    author {
      id
      username
    }
    content
    game {
      id
      players {
        items {
          id
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
          player {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
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
      ended
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
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
        }
        nextToken
      }
    }
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author {
        id
        username
      }
      content
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
        ended
        history
        result
        winner
        createdAt
        messages {
          items {
            id
            content
          }
          nextToken
        }
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
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
          player {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    phoneNumber
    pastGames {
      items {
        id
        game {
          id
          players {
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
          ended
          history
          result
          winner
          createdAt
          messages {
            nextToken
          }
        }
        player {
          id
          username
          email
          phoneNumber
          pastGames {
            nextToken
          }
          points
          skillLevel
          rank
          createdAt
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
  }
}
`;
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
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
          player {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    nextToken
  }
}
`;
export const searchUsers = `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: SearchableUserSortInput
  $limit: Int
  $nextToken: String
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
          player {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    nextToken
    total
  }
}
`;
export const getComplaint = `query GetComplaint($id: ID!) {
  getComplaint(id: $id) {
    id
    user {
      id
      username
    }
    reportedUser {
      id
      username
    }
    gameLink
    content
    processed
    processedBy {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
          id
          game {
            id
            creatorOrientation
            time
            variant
            fen
            available
            ended
            history
            result
            winner
            createdAt
          }
          player {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    createdAt
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
      }
      reportedUser {
        id
        username
      }
      gameLink
      content
      processed
      processedBy {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
      }
      createdAt
    }
    nextToken
  }
}
`;
