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
    userbase.forEach((user) => {
        namePointPair.push([user.getName(), user.getPoints()])
    });
    return namePointPair;
}
function compare( user1, user2 ) {
    return user1.getPoints() - user2.getPoints();
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

    post() {

    }

    follow(user) {

    }

    get followers() {
        return this.followers;
    }
}


