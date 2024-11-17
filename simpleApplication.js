function licenseEligibility(age, name){
    for(let i=0; i<age.length; i++){
      if(age[i]>=18){
    console.log(name[i] + " is " + age[i] + " years old and he/she is eligible for" +
        " driving licence.\n");
}else{
    console.log("Come back after " + Math.abs(18-age[i]) + " to get your driving license.\n")
}
    }

}

let personAge = [25, 10, 35, 76, 15, 18, 8, 17, 30, 29]
let personName = ["Rahul", "Sai", "Neha", "Raju", "Anuj", "Sameer", "Rani", "Abhishek", 
    "Rishika", "Sanju"
]

licenseEligibility(personAge, personName)
