TDD

Describe: rioList

Test: "It should return "keep going" for any number contains 1"
Code: rioList(1)
Expected Output: keep going; 

Test: "It should return "keep counting" for any number contains 2"
Code: rioList(2)
Expected Output: keep counting; 

Test: "It should return "a little bit more!" for any number contains 3"
Code: rioList(3)
Expected Output: a little bit more!; 

Test: "It should replace number 1, 2, and 3 when entering more than 10 digits"
Code: rioList(11)
Expected Output: 0, keep going, keep counting, a little bit more, 4, 5, 6, 7, 8, 9, keep going, keep going