
class Lives{
    constructor(_numberOfLive){
        this.x = 10;
        this.y = 20;
        this.width = 70;
        this.height = 60;
        this.numberOfLives = _numberOfLive;
        this.liveSpacing = 10;
    }

    display() {    
        for (let i = 0; i < this.numberOfLives; ++i) {
            image(liveImg, this.x + this.width * i + this.liveSpacing, this.y, this.width, this.height)
        }        
    }

    loseLife() {
        --this.numberOfLives;
    }
    
}