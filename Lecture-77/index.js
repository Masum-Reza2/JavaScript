// in this lecture i will learn class with constructor an awesome chiss yr!
class RailwayForm{
    constructor(name,age,mobile,trainno,Davva,){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.trainno = trainno;
        this.Davva = Davva;
    }

    preview () {
        alert('your name : '+ this.name+ ' Age : '+ this.age+' Phone Number : '+this.mobile+' Train no : '+
        this.trainno+'and Davva : '+ this.Davva)
    }

    submit(){
        alert('Dear '+this.name+' your ticket Submitted successfully for train '+this.trainno+' in davva '+this.Davva)
    }

    cancel(){
        alert('Dear '+this.name+' Your ticked Submission failed for train '+this.trainno+' in davva '+this.Davva)
    }
}

//you buy the form and filled like this
let MasumForm = new RailwayForm(
    'Masum',
    '22',
    '01735293200',
    '332420',
    'Gha'
)

//now submit, preview or cancel whatever your wish!
MasumForm.preview();
MasumForm.cancel();
MasumForm.submit();