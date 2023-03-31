test: 
code:
Expected Output: 

TDD

Describe: validate()

Test: "It should return true if input is 0"
Code: validate(0)
Expected Output: true;

Test: "It should return true if a number ends in 0"
Code: validate(20);
Expected Output: true;

Test: "It should return false if a number does not end in zero"
Code: validate(21);
Expected Output: false;