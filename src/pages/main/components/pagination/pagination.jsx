import { Button } from '../../../../components';
import styled from 'styled-components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button margin="0 5px" onClick={() => setPage(1)} disabled={page === 1}>
				В начало
			</Button>
			<Button
				margin="0 5px"
				onClick={() => setPage(page - 1)}
				disabled={page === 1}
			>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button
				margin="0 5px"
				onClick={() => setPage(page + 1)}
				disabled={page === lastPage}
			>
				Следующая
			</Button>
			<Button
				margin="0 5px"
				onClick={() => setPage(lastPage)}
				disabled={page === lastPage}
			>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	margin: 0 0 20px;
	position: absolute;
	width: 100%;
	bottom: 130px;
	padding: 20px 35px;

	& .current-page {
		width: 100%;
		height: 36px;
		font-size: 18px;
		font-weight: 500;
		line-height: 34px;
		text-align: center;
		border: 1px solid #000;
	}
`;
