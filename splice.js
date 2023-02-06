const friendsAge = [ 12, 21, 45, 25, 24, 62, 5, 425 ];

// Removes elements from an array and,
// if necessary, inserts new elements in their place, returning the deleted elements
// will change the original array
const partial = friendsAge.splice(2, 3);
console.log(partial);
console.log(friendsAge);
