# Unit Testing - Activity
## Adding new tests to Unit Test

- Edit the file ```classifyTrangles.test.js``` and add new tests cases. There are some example test cases added to the ```classifyTrangles.test.js```.

- You need to add following types of test cases:
- Robust Boundary Value Test Cases
<img src="https://github.com/user-attachments/assets/7690e997-1f9e-4a5c-b7e1-96e566b93239" width=60%/>

- Weak Normal Equivalence Class Testing (refer to the cheatsheet slide)
    <img src="https://github.com/user-attachments/assets/0cb67d5d-6ce8-49ac-b3fa-2c0229c12861" width=60%/>


Check the slides on week 4 for the details.

- Add comments for each test describing what is the type of the test (example: BVT or ECP)

- You can run the test cases using the following commant in terminal


```
npm test
```

- in case you bump into an issue, install the packages using through terminal in Codespaces:
```
npm install
```


# Requirements for Triangle Classifier

## Program Functionality

The Triangle Classifier is a simple program designed to classify the type of triangle based on the lengths of its sides (See Jorgensen's Textbook for details). 

The sides of the triangle are represented by three integer values: `a`, `b`, and `c`.

## Input Conditions

To determine the type of triangle, the following conditions must be met:

- **C1**: The length of side `a` must be between 1 and 200, inclusive (1 ≤ a ≤ 200).
- **C2**: The length of side `b` must be between 1 and 200, inclusive (1 ≤ b ≤ 200).
- **C3**: The length of side `c` must be between 1 and 200, inclusive (1 ≤ c ≤ 200).
- **C4**: The length of side `a` must be less than the sum of the lengths of sides `b` and `c` (a < b + c).
- **C5**: The length of side `b` must be less than the sum of the lengths of sides `a` and `c` (b < a + c).
- **C6**: The length of side `c` must be less than the sum of the lengths of sides `a` and `b` (c < a + b).

## Classification

The program will return an error if conditions C1, C2, or C3 are not satisfied.

## Outputs

If the input values for `a`, `b`, and `c` satisfy conditions C1, C2, and C3, the program will classify the triangle as one of the following types:

- **Equilateral**: All three sides are equal (a == b == c).
- **Isosceles**: Exactly two sides are equal (a == b || a == c || b == c).
- **Scalene**: No pair of sides is equal (a != b != c).
- **Not a Triangle**: If any of the conditions C4, C5, or C6 are not met, it is not a valid triangle.

## Usage

To use the Triangle Classifier, provide the lengths of the sides when calling the function:

```javascript
const triangleType = classifyTriangle(a, b, c);
console.log(triangleType);
```

## Deliverables:

### D1 (40 points)
- When you push the code back to GitHub the test cases will run automatically in the actions (see the short video on myCourses), a copy of the raw actions text with the test cases passing or failing is required (20 points)
- Screenshot of the test logs (20 points)

<img src="https://github.com/user-attachments/assets/470af257-a9ed-49ce-8bb0-1d64ebe5f82b" width=80%/>


### D2 (60 points)
- classifyTriangle.test.js with all the new tests (at least 20 new tests are needed)

