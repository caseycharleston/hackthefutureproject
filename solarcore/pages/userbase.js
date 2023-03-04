const userbase = [];

export function register(name, password) {
    userbase.push(new User(name, password));
}

export function checkLogin(name, password) {
    for (let i = 0; i < userbase.length; i++) {
        if (userbase[i].getName() == name && userbase[i].getPassword() == password) {
            return true;
        }
    }
    return false;
}

export function getHighestPoints() {
    userbase.sort(compare);
    const namePointPair = [];
    for (let i = 1; i <= userbase.length; i++) {
        namePointPair.push([i, userbase[i-1].getPoints(), userbase[i-1].getName()])
    }
    return namePointPair;
}
function compare( user1, user2 ) {
    return user2.getPoints() - user1.getPoints();
  }
  
export function getUserInfo(username) {
  for (let i = 0; i < userbase.length; i++) {
    if (userbase[i].getName() === username) {
      return userbase[i];
    }
  }
  return userbase[userbase.length - 1];
}

 class User {
    constructor(name, password) {
        this.name = name; // username
        this.pfp; // user's pfp
        this.points = 20; // # of rays
        this.password = password; // password
        this.feed = []; // this user's posts
        this.following = []; // users this person follows
        this.followers = []; // who is following this user
    }
    getName() {
        return this.name;
    }

    getPassword() {
        return this.password;
    }

    getPoints() {
        return this.points;
    }

    addPoints(points) {
        this.points + points;
    }

    get followers() {
        return this.followers;
    }
}
