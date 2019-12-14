import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';


export default function Comment(props) {
  const {
    id, author, content, createdAt, isAdmin, deleteComment,
  } = props;
  return (
    <div className="comment row">
      <div className="col-2">
        <Link to={`/account/${author}`}>
          <Avatar
            className="text-center"
            src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
          />
          <span>{author}</span>
        </Link>
      </div>
      <div className="col-10">
        {isAdmin && (
          <a href="/#" className="float-right">
            <DeleteForeverTwoToneIcon onClick={(e) => deleteComment(e, id)} style={{ color: '#708070' }} />
          </a>
        )}
        <p>{content}</p>
        <span className="float-right text-muted">
          {createdAt.slice(0, 10)}
          {createdAt.slice(11, 19)}
        </span>
      </div>
    </div>
  );
}
