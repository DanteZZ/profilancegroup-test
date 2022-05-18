import React, { Fragment } from 'react';
import { ROLE_ADMIN } from '../../../consts';

const Post = ({ ID, title, content, date, moderated, isAuth, userInfo, doAcceptPost, doDeclinePost }) => {
	const canModerate = () => isAuth && userInfo.priority == ROLE_ADMIN && !moderated;

	return (
		<div className="post">
			<div className="post__title">
				{title} {!moderated && '(на модерации)'}
			</div>
			<div className="post__content">{content}</div>
			<div className="post__footer">
				<div className="post__buttons">
					{canModerate() && (
						<Fragment>
							<button className="btn btn-green" onClick={() => doAcceptPost(ID)}>
								Одобрить
							</button>
							<button className="btn btn-red" onClick={() => doDeclinePost(ID)}>
								Удалить
							</button>
						</Fragment>
					)}
				</div>
				<div className="post__date">{date}</div>
			</div>
		</div>
	);
};

export default Post;
