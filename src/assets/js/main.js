const initTable = index => {
	const table = document.querySelectorAll('.table')[index];

	const leftSideColumns = table.querySelectorAll('.table__left-col');
	const rightSideTables = table.querySelectorAll('.table__col-wrapper');

	const setColumnHeight = (columnIndex, height, elem) => {
		rightSideTables.forEach(table => {
			const columns = table.querySelectorAll('.table__col');

			let maxValue;
			for (let i = 0; i < columns.length; i++) {
				maxValue = Math.round(
					Math.max(height, Number(columns[columnIndex].clientHeight))
				);
			}

			console.log(maxValue);

			columns[columnIndex].style.minHeight = maxValue + 'px';
			elem.style.minHeight = maxValue + 'px';
		});
	};

	for (let i = 0; i < leftSideColumns.length; i++) {
		setColumnHeight(i, leftSideColumns[i].offsetHeight, leftSideColumns[i]);
	}
};

initTable(0);
// initTable(1);
// initTable(2);
