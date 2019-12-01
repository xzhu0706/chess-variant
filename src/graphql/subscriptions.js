/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
`;
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
`;
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
`;
export const onUpdateGameState = `subscription OnUpdateGameState($id: ID!) {
  onUpdateGameState(id: $id) {
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
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
`;
export const onCreatePlayerGameMapping = `subscription OnCreatePlayerGameMapping {
  onCreatePlayerGameMapping {
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
    }
  }
}
`;
export const onUpdatePlayerGameMapping = `subscription OnUpdatePlayerGameMapping {
  onUpdatePlayerGameMapping {
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
    }
  }
}
`;
export const onDeletePlayerGameMapping = `subscription OnDeletePlayerGameMapping {
  onDeletePlayerGameMapping {
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
    }
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
    id
    author
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
}
`;
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
    id
    author
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
}
`;
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
    id
    author
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
}
`;
