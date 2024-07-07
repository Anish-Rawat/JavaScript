// Second Code
const profile = {
    userName : "Anish Rawat",
    bio : "Software Engineer",
    followers : 220,
    following : 150,
    post : 39,
    isFollow : true,
};

console.log(profile);
console.log(profile.userName);
console.log(profile.bio);
console.log(profile.isFollow);

profile.isFollow = false;
console.log(profile.isFollow);

profile.following = profile.following + 1;
console.log(profile.following);

profile.followers = profile.followers - 1;
console.log(profile.followers);

profile.userName = "Anish Singh Rawat";
console.log(profile.userName);

profile.bio = "Android Developer";
console.log(profile.bio);

profile.post = 40;
console.log(profile.post);

console.log(typeof profile.isFollow + " " + typeof profile.userName);