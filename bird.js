class Bird {
    constructor(width, height) {
        this.B_WIDTH = 10;
        this.B_HEIGHT = 10;
        this.GRAVITY = 0.3;

        this.width = width;
        this.height = height;
        this.x = width / 5;
        this.y = height / 2;
        this.speed = 0;

        this.score = 0;
    }

    display() {
        fill(color(255));
        rect(this.x, this.y, this.B_WIDTH, this.B_HEIGHT);

        this.speed += this.GRAVITY;
        this.y += this.speed;
    }

    jump() {
        this.speed = -8;
    }

    checkColl(obstacles) {
        if (this.y > this.height || this.y < 0) {
            return true;
        }

        for (let o of obstacles) {
            if (this.x > o.x && this.x < o.x + o.width) {
                if (this.y < o.holeStart || this.y > o.holeStart + o.hole) {
                    return true;
                }
            }
        }

        return false;
    }
}
