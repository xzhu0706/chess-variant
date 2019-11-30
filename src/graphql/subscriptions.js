/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
  }
}
`;
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
  }
}
`;
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
  }
}
`;
export const onUpdateGameState = `subscription OnUpdateGameState($id: ID!) {
  onUpdateGameState(id: $id) {
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
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
  }
}
`;
export const onCreatePlayerGameMapping = `subscription OnCreatePlayerGameMapping {
  onCreatePlayerGameMapping {
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
      pastGames {
        nextToken
      }
      points
      skillLevel
      rank
    }
  }
}
`;
export const onUpdatePlayerGameMapping = `subscription OnUpdatePlayerGameMapping {
  onUpdatePlayerGameMapping {
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
      pastGames {
        nextToken
      }
      points
      skillLevel
      rank
    }
  }
}
`;
export const onDeletePlayerGameMapping = `subscription OnDeletePlayerGameMapping {
  onDeletePlayerGameMapping {
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
      pastGames {
        nextToken
      }
      points
      skillLevel
      rank
    }
  }
}
`;
