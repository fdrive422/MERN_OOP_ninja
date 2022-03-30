class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);

        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);

        return this;
    }

    drinkSake() {
        console.log(`${this.name} drinks Sake....`);
        this.health += 10;
        console.log(`+ 10 Health! Health now ${this.health}`);

        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(
            "Ninjas don't wish upon a star, they throw them..."
        );
    }
}

const ninja1 = new Ninja("Hatsumi Masaaki", 100);
ninja1.sayName().showStats().drinkSake();

const sensei1 = new Sensei("Master Kawakami");
sensei1.speakWisdom();
