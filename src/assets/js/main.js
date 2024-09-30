const leftCols = document.querySelectorAll('.box');
const rightTables = document.querySelectorAll('.table__content');

const toSameHeight = (index, value) => {
	rightTables.forEach(elem => {
		const cols = elem.querySelectorAll('.table__col');
		console.log(value);

		cols[index].style.height = value + 'px';
	});
};

for (let i = 0; i < leftCols.length; i++) {
	toSameHeight(i, leftCols[i].offsetHeight);
}
