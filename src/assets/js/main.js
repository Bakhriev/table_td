document.addEventListener('DOMContentLoaded', () => {
	const table = document.querySelector('.table');
	console.log(table);

	const leftCols = table.querySelectorAll('.table__left-col');

	let maxValue;

	leftCols.forEach((elem, i) => {
		const dataId = elem.dataset.col;

		const identicalCols = [...table.querySelectorAll(`[data-col="${dataId}"]`)];

		const heights = identicalCols.map(col => col.clientHeight + 5);

		const maxValue = Math.max(...heights);

		identicalCols.forEach(elem => (elem.style.minHeight = `${maxValue}px`));
	});
});
