//Function declarations
function retire(age){
    let year= 2017; //set current year
    let retirementAge= 65; //set current retirement age
    let diff = retirementAge - age;
    //write three separate conditional statements to say when you can take out money.
    if (diff<=18) {
          console.log("too young");
    }
    //first if your age is older than the retirementAge
    if (diff<=50) {
          console.log("wait a few years");
   }
    //second if your age is equal to the retirementAge
    if (diff<=65){
          console.log("here it comes");
    }
    //third if your age is younger than the retirementAge
    if (diff<=100) {
          console.log("wait a week");
    }
}


//main function tests your code above with different inputs.
function main(){

    retire(18);

    retire(50);

    retire(65);

    retire(100);

    //Hundo!

}




// ctrl + shift + B
//This will run the program.
main();
