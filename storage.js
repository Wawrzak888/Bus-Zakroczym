const Storage = {
    KEYS: {
        HOME_STOP: 'bus_home_stop',
        WORK_STOP: 'bus_work_stop',
        LAST_DIRECTION: 'bus_last_dir',
        LAST_STOP: 'bus_last_stop'
    },

    setHome(stopName) {
        localStorage.setItem(this.KEYS.HOME_STOP, stopName);
    },

    getHome() {
        return localStorage.getItem(this.KEYS.HOME_STOP);
    },

    setWork(stopName) {
        localStorage.setItem(this.KEYS.WORK_STOP, stopName);
    },

    getWork() {
        return localStorage.getItem(this.KEYS.WORK_STOP);
    },

    setLastDirection(directionId) {
        localStorage.setItem(this.KEYS.LAST_DIRECTION, directionId);
    },

    getLastDirection() {
        return localStorage.getItem(this.KEYS.LAST_DIRECTION);
    },

    setLastStop(stopName) {
        localStorage.setItem(this.KEYS.LAST_STOP, stopName);
    },

    getLastStop() {
        return localStorage.getItem(this.KEYS.LAST_STOP);
    }
};
