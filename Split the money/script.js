const amount = document.getElementById('amount');
const people = document.getElementById('people');
const showAmount = document.getElementById('showAmount')


function calculate() {
    var amountVal = document.getElementById('amount').value;
    var peopleVal = document.getElementById('people').value;

    // Checks if the field is Empty 
     if(amountVal === "" || amountVal === null) {
        alert('Please Enter an amount to get this thing running');
        return;
     } 

     // Checks if the field is Empty
     if(peopleVal === "" || peopleVal === null) {
         alert('Please Enter number of people to get this thing running');
         return;
     }

     if(peopleVal <= 1) {
         alert(amountVal + ' CFA ' + ' WTF ' + " Don't be stingy mann, share the money with someone");
         return;
     }

     // Calculates the Output
     var totalAmount = Math.floor(amountVal / peopleVal);

     // Provides the Output
     document.getElementById('showAmount').innerHTML = 'You Should share it ' + totalAmount + ' CFA' + ' each';
     showAmount.style.textTransform = 'uppercase';

}



// About the Author
function about() {
    var message = alert('This piece of art was created by a guy called Guy Asong');
}

