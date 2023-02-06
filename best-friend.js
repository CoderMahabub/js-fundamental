function bestFriend(friends) {
	let bestFriendName = '';
	for (let i = 0; i < friends.length; i++) {
		const friend = friends[i];
		let friendsLength = friend.length;
		console.log(bestFriendName);
		if (bestFriendName.length > friendsLength) {
			bestFriendName.push(friend);
		}
	}
	return bestFriendName;
}
const allFriends = [ 'Amin', 'Bamin', 'kumin Khan', 'azam', 'kuddus', 'rasel', 'sumon' ];
console.log(bestFriend(allFriends));
