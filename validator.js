/*Write a program to prompt the user for a password. The password should meet all
these requirements:
●
●
●
●
The password must be at least 8 characters long.
The password must contain at least one uppercase letter.
The password must contain at least one number.
If the password does not meet all the requirements, the program should
keep asking the user for a new password until they provide a valid one.
Your application should:
●
●
●
●
Use readlineSync.question() to prompt a user for input.
Prompt a user to enter a password.
Loop through the password to ensure that it meets the password
requirements, using the appropriate iteration statement(s) to do so. Make
sure you consider how iteration aﬀects top-to-bottom execution of your code
and when a while or do-while loop would be more appropriate.
Return one of the following statements:
○
If the password meets the requirements, a statement to let the user
know they have been successful
○
If the password does NOT meet the requirements, a statement to let
the user know their password does not meet the requirements*/
const readlineSync = require('readline-sync');
let password = '';

do {
password = readlineSync.question('Please enter a password:\nThe password must be at least 8 characters long.\nThe password must contain at least one uppercase letter.\nThe password must contain at least one number.\n');
     if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(password)) {
        console.log("Password must contain at least one uppercase letter.");
    } else if (!/[0-9]/.test(password)) {
        console.log("Password must contain at least one number.");
    } else {
        console.log("Password is valid!");
    }
}
    while (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password));