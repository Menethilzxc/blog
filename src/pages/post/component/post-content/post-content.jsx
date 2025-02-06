import { H2, Icon } from '../../../../components';

import styled from 'styled-components';

const PostContentContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2 size="24px">{title}</H2>
			<div className="special-panel">
				<div className="publised-at">
					<Icon id="fa-calendar-o" margin="0 7px 0 0 " size="18px" />
					{publishedAt}
				</div>
				<div className="buttons-panel">
					<Icon id="fa-pencil-square-o" margin="0 10px 0 0" size="22px" />
					<Icon id="fa-trash-o" size="20px" />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}

	& .publised-at {
		display: flex;
		align-items: center;
		height: 44px;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons-panel {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
