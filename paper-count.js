function paperRequirements(book1, book2, book3) {
	const bookOneFixedPages = 100;
	const bookTwoFixedPages = 200;
	const bookThreeFixedPages = 300;

	const totalBookOneCost = bookOneFixedPages * book1;
	const totalBookTwoCost = bookTwoFixedPages * book2;
	const totalBookThreeCost = bookThreeFixedPages * book3;
	const totalPaperNeeded = totalBookOneCost + totalBookTwoCost + totalBookThreeCost;
	return totalPaperNeeded;
}

const bookOne = 5;
const bookTwo = 2;
const bookThree = 1;
console.log(paperRequirements(bookOne, bookTwo, bookThree));
