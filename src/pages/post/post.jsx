import { useEffect, useLayoutEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments, PostForm } from './component';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, params.id, isCreating]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
	white-space: pre-line;
`;
