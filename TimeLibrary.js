class timer{
    constructor(callback,tempo){
        this.callback = callback
        this.tempo = tempo*1000
        this.remaining = tempo
        this.timerId
        this.start
    }

    stop(){
        clearTimeout(this.timerId)
        this.remaining = this.tempo;
    }

    pause(){
        clearTimeout(this.timerId)
        this.remaining -= new Date() - this.start;
    }

    resume(){
        this.start = new Date()
        this.timerId = setTimeout(()=>{
            this.remaining = this.tempo
            this.callback()
        },this.remaining)
    }
}

class cronometro{
    constructor(){
        this.secondAll = 0

        this.miliseconds = 0
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
        this.days = 0

        this.t
    }
    play(){
        this.t = setInterval(()=>{
            this.miliseconds++
            if(this.miliseconds == 1000){
                this.miliseconds = 0
                this.seconds++
                this.secondAll++
            }
            if(this.seconds == 60){
                this.seconds = 0
                this.minutes++
            }
            if(this.minutes == 60){
                this.minutes = 0
                this.hours++
            }
            if(this.hours == 24){
                this.hours = 0
                this.days++
            }
        },1)
    }

    pause(){
        clearInterval(this.t)
    }

    reset(){
        this.miliseconds = 0
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
        this.days = 0
        this.secondAll = 0
    }

    getTime(){
        return {
            miliseconds: this.miliseconds,
            seconds:this.seconds,
            minutes:this.minutes,
            hours:this.hours,
            days:this.days
        }
    }

    getSeconds(){
        return this.secondAll
    }
}

