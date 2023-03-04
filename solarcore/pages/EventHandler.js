    activeEvents = [];
    archivedEvents = [];

    export function addEvent(name, points, time, img) {
        this.activeEvents.push(new Event(name, points, time, img));
    }

    export function getEvents() {
        return this.activeEvents;
    }

    export function getArchivedEvents() {
        return this.archivedEvents;
    }

export class Event {
    constructor(name, points, time, img) {
        this.name = name;
        this.points = points;
        this.time = time;
        this.img = img;
    }

    getName() {
        return this.name;
    }

    getPoints() {
        return this.points;
    }

    getTime() {
        return this.time;
    }

    getImg() {
        return this.img;
    }
}

addEvent('Hack the Future', 1000, '1', './../assets/htf.png');