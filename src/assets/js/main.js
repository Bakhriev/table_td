const leftSideColumns = document.querySelectorAll('.table__left-col');
const rightSideTables = document.querySelectorAll('.table__content');

const setColumnHeight = (columnIndex, height) => {
	rightSideTables.forEach(table => {
		const columns = table.querySelectorAll('.table__col');
		columns[columnIndex].style.minHeight = height + 'px';
	});
};

for (let i = 0; i < leftSideColumns.length; i++) {
	setColumnHeight(i, leftSideColumns[i].offsetHeight);
}
