class Circle {
    radius;
    color;

    constructor(radius, color) {
        this.color = color;
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius() {
        this.radius = 6;
    }

    getColor() {
        return this.color;
    }

    setColor() {
        this.color = "red";
    }

    getchuvi() {
        return 2 * Math.PI * this.radius;
    }
    getdientich() {
        return Math.PI * this.radius * this.radius ;

    }

}
let circle = new Circle(5, "red")
circle.getRadius();
console.log(circle.getRadius())
circle.setRadius();
console.log(circle.getRadius())
console.log(circle.getdientich());
alert(circle.getdientich())


