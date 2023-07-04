class version1 {
    constructor(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }

    preview() {
        console.log(`${this.name} is ${this.age} years old and mobile number is ${this.mobile}`)
    }

    calculateBirthYear() {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - this.age;
        return console.log(`${this.name} was born in ${birthYear}`);
      }
}


class version2 extends version1 {
    constructor(name, age, mobile, district, village, houseno) {
        super(name, age, mobile)
        this.district = district;
        this.village = village;
        this.houseno = houseno;
    }

    preview() {
        super.preview();
        console.log(`and ${this.name} lives in ${this.district} in village ${this.village}, in the house no ${this.houseno}`)
    }
}


let masum = new version2(
    'Masum Reza',
    '22',
    '01735293200',
    'Moulvibazar',
    'Kalenga',
    '420'
)

masum.preview();
masum.calculateBirthYear();