# Skin + Me - Tech Assessment - Full Stack

We have recently launched a new online shop. So far, our shop has been performing really well. Our growth team came up with a new idea we think will delight our customers and help us grow as a business.

### Hypothesis

> Offering discounts will encourage people to try new products when they order.

We want to **test this idea quickly and improve it one step at a time**.

You are the engineering lead for this project.

## Introducing the Discounts System Epic

In the kickoff workshop we worked together to define the vision for our discount system. This gives an overview of the full range of discount features we might want to build in the future.

> [!IMPORTANT]
> You are not expected to build these features as part of your technical test! They provide context for the feature and simulate a real-world set of requirements. As you design your solution, think about how your system could support these needs.

### Constraints

Below is a list of general rules and business logic that you will need to consider as you design your solution:

- Customers MUST use a discount code to trigger the discount.
- Discount codes MUST be unique.
- Applying a discount SHOULD never allow a customer's order to have a negative balance.
- Customers SHOULD only be allowed to use one discount at a time.
- Changing a discount code SHOULD apply and validate / revalidate the new discount.
- Discounts SHOULD be revalidated on placing an order.

### Capabilities

#### Discount Management

Our growth team wants to be able to manage our discount system. Below are a list of possible future features:

- See a list of active discount codes
- See the discount code used on an order
- Be able to create new discount codes
- Be able to define how much discount should be applied
- Be able to manage the discount validation rules
- Be able to manage custom error messages for invalid discounts
- Be able to manage custom success messages for valid discounts

#### Discount application and validation

The growth team want to be able to manage:

- how much each discount code applies
- conditions / limits on their use

Below is a list of possible future features:

- Apply a % based discount - For example 5% off
- Apply a fixed price discount - For example £5 off
- Apply a conditional discount based on a minimum order value. For example 5% off if you spend more than £50.
- Apply a conditional discount based on specific products. For example £5 off if you have 2 or more of Product A in your checkout.
- Limit the number of times a discount code can be used.
- Limit use of a discount code after an expiry date.
- Limit use of a discount code for people with a specific email address.

> [!IMPORTANT]
> To reiterate. You are not expected to build these features! They are there to provide context for you to think about as you design your solution.

## The Task

This repo contains a basic checkout frontend app built in React. It also includes a basic checkouts API built in Python using the Flask framework. In the issues tab you will find a ticket with the discount feature the team wants to ship.

Although some code is provided, you are welcome to change, replace, or discard any parts you see fit.

You can use any resources you would normally use (e.g. Google Search, StackOverflow, etc). Feel free to reach out if you would like further guidance on the task at any point. This will not negatively impact your assessment.

**The React front-end is there for your convenience. If you are not comfortable with React, or any front-end technologies, you are welcome to not use any. Instead provide another way for reviewers to run your code. For example a Postman collection or stub endpoints.**

If you have difficulty running the project, please let us know. We want to give you something to get you started quickly so you can focus on coding. The repo should work with little configuration and we are not testing you on anything in this area.

## How long should I take?

We expect the task to take between 4-6 hours to complete. Please do not worry if you can't meet all the acceptance criteria in the time. Get as far as you can and we can discuss. We would also be happy to see comments/pseudocode for any areas you do not have time to explore. Good luck!

## Further Guidance

So you know what we are looking for, the following is a list of themes we will use to assess your work.

- Knowledge and understanding of Python.
- Knowledge and understanding of relational databases.
- Understanding of architecture and system design.
- Clean code and use of standards.
- Awareness of testing and testability.
- Your use of version control for example git commit message and pull requests.
- A clear README on how to start your project, plus any other information you feel is relevant.
- Comments in your code for anything you want to convey your thought process or what you might do given more time.
- Consideration given to productionisation.
- To a lesser extent, we will be considering your knowledge of SQLAlchemy and Flask, but this will not form the majority of the assessment.

## How to submit

- Clone the repository to your development machine
- Create a private repository in your own Github account
- Commit your code to this private repository
- Feel free to break up the work into smaller tickets and pull requests
- Create a pull request for each ticket with a comment describing your changes and decisions you made
- Add the reviewers as collaborators on your repository on Github
