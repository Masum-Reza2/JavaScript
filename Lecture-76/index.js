// //basic syntax for class
// class ClassName {
//     constructor(/* constructor parameters */) {
//       // Initialize properties
//     }

//     // Define methods
//     methodName1(/* method parameters */) {
//       // Method logic
//     }

//     methodName2(/* method parameters */) {
//       // Method logic
//     }

//     // ...
//   }


class RailwayForm {
    submit() {
        alert(this.name + ' this form is submitted for train number ' + this.tn + ' in davva number ' + this.davva)
    }
    cancel() {
        alert(this.name + ' This form is cancelled for train number ' + this.tn + ' in davva number ' + this.davva)
    }
    fill(givenname, tn, davva) {
        this.name = givenname
        this.tn = tn
        this.davva = davva
    }
};

let harry = new RailwayForm();
let rohan = new RailwayForm();
let rohan2 = new RailwayForm();

harry.fill('Harry', '476532', 'KHa')
rohan.fill('Rohan', '736420', 'GHa')
rohan2.fill('Rohan', '420420', 'CHa')

harry.submit();
rohan.submit();
rohan.cancel();
rohan2.submit();