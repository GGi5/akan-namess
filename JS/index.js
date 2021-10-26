{
//  dateControl.value=2017-06-01

        //    var datecontrol= document.queryselector("input[type="date"]').value;
       //    var input = dateControl.value

       //get gender input
var gender = "male"

// var   console.log(dateControl); //prints"2017-06-01"




getAkan(weekDay, gender)
}

    function calculateDayOfTheWeek() {
        //    var year= dateEntered,getFullYear()
        //    var month=dateEntered.getMonth()
        //    var day=dateEntered.getDate()

        //   console.log(typeOf year + "year" + typeOf month + "month +day + "day")

        //    var yearString=year,toString()
        //    var CC=parseInt (yearString.slice(0,2))
        //    var YY=parseInt (yearString.slice(2,4))
        //    var MM=month
        //    var DD=day

        //     var dayOfTheWeek=parseInt(((CC/4-) -2*CC-1) + ((5*YY/4)) + ((26* MM+1)/10) + DD) %7

        console.log(DayOfTheWeek);
        return DayOfTheWeek
    }

    //      var maleNames="Ama","Akosua", "Abenaa", "Akua", "Yaa", "Afua"
    //      var femaleNames=["Ama","Akosua", "Abenaa", "Akua", "Yaa", "Afua"]

    if (gender === "male") {
        var akanName = maleName[weekDay]
        console.log(akanName)
        alert(akanName)
    }
    else (gender === "female")
    {
        var femaleAkan = femaleName[weekDay]
        console.log(femaleAkan)
    }

}