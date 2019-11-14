/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    username
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
    points
    skillLevel
    rank
  }
}
`;
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
    id
    gameRoomID
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
  }
}
`;
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
    id
    gameRoomID
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
  }
}
`;
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
    id
    gameRoomID
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
  }
}
`;
export const onCreateGameRoom = `subscription OnCreateGameRoom {
  onCreateGameRoom {
    id
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
export const onUpdateGameRoom = `subscription OnUpdateGameRoom {
  onUpdateGameRoom {
    id
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
export const onDeleteGameRoom = `subscription OnDeleteGameRoom {
  onDeleteGameRoom {
    id
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
