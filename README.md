# License Eligibility Checker

# Project Purpose
This project is designed to check if a person is eligible for a driving license based on their age. The program takes two arrays: one for names and another for ages, then outputs whether each person is eligible for a driving license or not.

# Features
- The program checks whether a person is eligible for a driving license based on the age criteria (18 years or older).
- If the person is eligible, the program prints a message confirming the eligibility.
- If the person is under 18, the program calculates and displays how many years are left before they can apply for a driving license.
- The program can handle multiple people by accepting an array of ages and names.

# How It Works
The function `licenseEligibility(age, name)` takes two inputs:
1. age: An array of integers representing the ages of the individuals.
2. name: An array of strings representing the names of the individuals.

It loops through the `age` array, checks if each individual is eligible (i.e., 18 or older), and prints a corresponding message.

# Example Output:
For the following input:

let personAge = [25, 10, 35, 76, 15, 18, 8, 17, 30, 29];
let personName = ["Rahul", "Sai", "Neha", "Raju", "Anuj", "Sameer", "Rani", "Abhishek", "Rishika", "Sanju"];
