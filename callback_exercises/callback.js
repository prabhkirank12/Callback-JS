class Clock {
    constructor() {
        // 1. Create a Date object.
        let date = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours();
        this.mins = date.getMinutes();
        this.secs = date.getSeconds();

        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.mins}:${this.secs}`);
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
       
        this.secs += 1;
        if (this.secs === 60) {
            this.secs = 0; 
            //increase minute by one
            this.mins += 1;
        }

        if (this.mins === 60) {
            this.mins = 0;
            this.hours += 1;
        }

        if (this.hours === 24) {
            this.hours = 0; 
        }

        debugger
        this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

const clock = new Clock();

// The bind() method creates a new function that, 
//when called, has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the new function is called.


