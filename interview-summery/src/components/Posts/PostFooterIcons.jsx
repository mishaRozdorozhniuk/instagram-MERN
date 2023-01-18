import React from 'react';
import Share from '../../icons/Share';
import SaveIcon from './SaveIcon';

const PostFooterIcons = ({ trigger, savedPostId, like, comments, removePostId, showModal }) => {
  return (
    <div className="post__footer-icons">
      <div className="post-icons-inner">
        <img className="like-icon" src={like} alt="like" />
        <span onClick={showModal} className="comments-icon-wrapper">
          <img className="comments-icon" src={comments} alt="comments" />
        </span>
        <Share />
      </div>
      {!trigger ? (
        <div onClick={() => savedPostId()}>
          <SaveIcon remove={false} />
        </div>
      ) : (
        <div onClick={() => removePostId()}>
          <SaveIcon remove={true} />
        </div>
      )}
    </div>
  );
};

export default PostFooterIcons;
