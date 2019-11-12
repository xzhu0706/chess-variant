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
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorSocketId
    creatorOrientation
    variant
  }
}
`;
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
    id
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorSocketId
    creatorOrientation
    variant
  }
}
`;
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
    id
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorSocketId
    creatorOrientation
    variant
  }
}
`;
export const onCreateSocketId = `subscription OnCreateSocketId {
  onCreateSocketId {
    id
    socketId
  }
}
`;
export const onUpdateSocketId = `subscription OnUpdateSocketId {
  onUpdateSocketId {
    id
    socketId
  }
}
`;
export const onDeleteSocketId = `subscription OnDeleteSocketId {
  onDeleteSocketId {
    id
    socketId
  }
}
`;
