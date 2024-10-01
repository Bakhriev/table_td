const tables = document.querySelectorAll('.table');

tables.forEach(table => {
	const leftCols = table.querySelectorAll('.table__left-col');
	const rightCols = table.querySelectorAll('.table__col');

	let maxValue;

	leftCols.forEach((elem, i) => {
		const dataId = elem.dataset.col;

		const identicalCols = [...table.querySelectorAll(`[data-col="${dataId}"]`)];

		const heights = identicalCols.map(col => col.clientHeight + 5);
		if (dataId === 3) {
			console.log(identicalCols);
		}

		const maxValue = Math.max(...heights);

		identicalCols.forEach(elem => (elem.style.minHeight = `${maxValue}px`));
	});
});
