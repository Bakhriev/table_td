document.fonts.ready.then(() => {
	const table = document.querySelector('.table');

	const leftCols = table.querySelectorAll('.table__left-col');

	let maxValue;

	leftCols.forEach((elem, i) => {
		const dataId = elem.dataset.col;

		const identicalCols = [...table.querySelectorAll(`[data-col="${dataId}"]`)];

		const heights = identicalCols.map(col => col.clientHeight + 10);

		const maxValue = Math.max(...heights);

		identicalCols.forEach(elem => (elem.style.minHeight = `${maxValue}px`));
	});
});
