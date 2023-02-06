/*
fixed: per item wood requirements
vari: quantatity;
1. chair --> 3 cft;
2. table --> 10 cft;
3.bed --> 50 cft;
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
	const woodForChair = 3;
	const woodForTable = 10;
	const woodForBed = 50;
	const chairWoodNeeded = chairQuantity * woodForChair;
	const tableWoodNeeded = tableQuantity * woodForTable;
	const bedWoodNeeded = bedQuantity * woodForBed;
	const totalWoodNeeded = chairWoodNeeded + tableWoodNeeded + bedWoodNeeded;
	return totalWoodNeeded;
}
const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);
