
console.log('Welcome to the password validator tool!')

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Enter password: ", function(input){
	
	tokens = input.split(' ');
	
	password = tokens[0];
	
	


	if (password.length >= 10){
		console.log('Great password!')
	} 
    else{
        console.log('Password needs to contain at least 10 characters')
    }
    
	

	// This line closes the connection to the command line interface.
	reader.close()

});
