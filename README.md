# Skin + Me - Tech Assessment - Full Stack

We have recently launched a new online shop. So far, our shop has been performing really well. In our most recent planning workshop, our growth team came up with a new idea we think will delight our customers and help us grow as a business.

### Hypothesis

> We believe that offering discounts will encourage people to try new products when they order.

We want to **test this idea quickly and improve it one step at a time**. You have been given the role of engineering lead for this project.

## Introducing the Discounts System Epic

In the planning workshop our Engineering team worked with the Growth team to define the overall vision for our discount system. This gives an overview of the full range of features we might want to build in the future.

> [!INFO]
> You are not expected to build all of these features as part of your technical test! They are provided for context to help you consider how the system might need to evolve. As you design your solution, you might want to think about how your system could support the business' desired capabilities.

### Constraints

Below is a list of general rules and business logic that you will need to consider as you design your solution:

- Customers MUST use a valid discount code to trigger the discount.
- Discount codes MUST be unique.
- Applying a discount SHOULD never allow a customer's order to have a negative balance.
- Customers SHOULD only be allowed to use one discount at a time.
- Changing a discount code SHOULD apply and validate / re-validate the new discount.
- Discounts SHOULD be revalidated on placing an order.

### Capabilities

#### Discount Management

Our growth team want to be able to independently manage our discount system. Below are a list of possible future features:

- See a list of active discount codes
- See the discount code used on an order
- Be able to create new discount codes and define how the discount should be applied
- Be able to define custom error messages for invalid discounts
- Be able to define custom success messages for valid discounts

#### Discount application and validation

The growth team want to be able to independently manage how much each discount code to applies and conditions / limits on their use. Below is a list of possible future features:

- Apply a % based discount - For example 5% off
- Apply a fixed price discount - For example £5 off
- Apply a conditional discount based on a minimum order value - For example 5% off if you spend more than £50.
- Apply a conditional discount based on specific products or types of products - For example £5 off if you have 2 or more of Product A in your checkout.
- Limit the number of times a discount code can be used.
- Limit use of a discount code after an expiry date.
- Limit use of a discount code for people with a specific email address.

> [!INFO]
> To reiterate You are not expect to build these features! But they provide context for you to think about as you design your solution.

## The Task

You will find a repo with a basic checkout page and checkouts API already built. In the issues tab you will find a ticket with the first discount feature we want to build.

Although some code is provided, you are welcome to change, replace, or discard any parts you see fit.

You can use any resources you would normally use (e.g. Google Search, StackOverflow, etc) and feel free to reach out if you would like further guidance on the task at any point (this will not impact your assessment negatively). **The React front-end is provided for your convenience. If you are not comfortable with React, or any front-end technologies, you are welcome to not use any and instead either stub endpoints or provide a Postman collection (or equivalent) for running your code.**

If you have difficulty running the project, please let us know. We wanted to give you something to get you started quickly so you can focus on coding, so this should work with little configuration and we are not testing you on anything in this area.

We expect the overall task to take between 4-6 hours to complete. Please do not worry if you can't meet all the acceptance criteria in this time. Get as far as you can and we can discuss. We would also be happy to see comments/pseudocode for any areas you do not have time to explore. Good luck!

## Further Guidance

So you know what we are looking for, the following is a list of themes we will use to assess your work.

- Knowledge and understanding of Python, Relational Databases and general backend development (to a lesser extent, we will also be considering your knowledge of SQLAlchemy and Flask, but this will not form the majority of the assessment).
- Understanding of architecture and system design.
- Clean code and use of standards.
- Awareness of testing and testability.
- Consideration given to productionisation.
- Comments in your code for anything you want to convey your thought process or what you might do given more time.
- README on how to start your project, plus any other information you feel is relevant.
- We would like you to create a private repository in your github account and commit your code to it. We would urge you to commit relatively frequently so we can get an idea of your style and approach

_The below tasks are entirely optional and will not impact the main assessment. However, if you feel any are important to show off your knowledge and skillset particularly, please feel free to add or tell us if you want to discuss at the follow up interview._

- _Unit tests_
- _Dockerisation of front end application_
- _Frontend styling_
- _A/B testing_
