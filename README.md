# E-Commerce Back End

## Description

My motivation for building this project was to gain experience with writing server routes using the JavaScript Sequelize package.  I built this project so that I could learn about Sequelize and how to use it effectively.  This project is the back end code for what appears to be a hypothetical storefront.  I am taking a guess because I don't have front end code for this project.  The project solves the problem of a company with a storefront needing an effective back end so that they can retrieve data about their products, post new data, and update and delete existing data.  For this project, I learned about creating server routes with Javascript.  I also learned about creating models with Sequelize.

## Table of Contents (Optional)

This README isn't that long, so N/A.

## Installation

To start, clone my GitHub repository with the "git clone" command.  In order to use this project as it currently stands, you will need to install Insomnia.  Insomnia can be downloaded here: [https://insomnia.rest/download](https://insomnia.rest/download).  Additionally, once you have cloned my repository and navigated to its directiory, you will need to install the necessary dependencies with the "npm install" command.  Finally, you will need to add the following lines to the project's .env file:

DB_NAME='ecommerce_db'
DB_USER=[your mysql2 username]
DB_PW=[your mysql2 password]

## Usage

After you have followed the installation instructions above, and navigated to the project's directory in Git Bash, run the command "mysql -u [your mysql2 username] -p" and press **Enter**.  Then, enter your mysql2 password and press **Enter**.   Once you are successfully inside the mysql2 shell, run the command "source db/schema.sql" to initialize the database.  Next, exit the mysql2 shell with the "exit" command.  Then, in Git Bash, run the command "npm run seed" to run the seed script and thereby seed the database.  Next, in Git Bash, run the command "npm start" to start the server.  If the server starts successfully, you receive a message in the console that the app is listening on a specific port.

From here, open Insomnia and start creating routes.  This README won't be a tutorial on how to use Insomnia, so I will assume you know how to create new routes.  I will just tell you which routes to create.  You should create the following routes:

**Category Routes**

1. &nbsp;GET: &nbsp;localhost:3001/api/categories/

    &nbsp;&nbsp;Successful Return: &nbsp;All categories and their associated product data


2. &nbsp;GET: &nbsp;localhost:3001/api/categories/1

    &nbsp;&nbsp;Successful Return: &nbsp;The category with the ID of 1 and its associated product data

3. &nbsp;POST: &nbsp;localhost:3001/api/categories/

    &nbsp;&nbsp;JSON body: &nbsp;{"category_name":"Movies"}

    &nbsp;&nbsp;This route creates a new category.

    &nbsp;&nbsp;Successful Return: &nbsp;The created category in JSON format.

4. &nbsp;PUT: &nbsp;localhost:3001/api/categories/3

    &nbsp;&nbsp;JSON body: &nbsp;{"category_name":"Trouser"}

    &nbsp;&nbsp;This route updates the category with the ID of 3.

    &nbsp;&nbsp;The following return value indicates the update was successful: &nbsp;[1]

5. &nbsp;DELETE: &nbsp;localhost:3001/api/categories/3

    &nbsp;&nbsp;This route deletes the category with the ID of 3.

    &nbsp;&nbsp;The following return value indicates the deletion was successful: &nbsp;1

**Product Routes**

1. &nbsp;GET: &nbsp;localhost:3001/api/products

    &nbsp;&nbsp;Successful Return: &nbsp;All products and their associated tag data.

2. &nbsp;GET: &nbsp;localhost:3001/api/products/1

    &nbsp;&nbsp;Successful Return: &nbsp;The product with the ID of 1 and its associated tag data

3. &nbsp; POST: &nbsp;localhost:3001/api/products/

    &nbsp;&nbsp;JSON body: &nbsp;{"product_name": "Basketbl", "price": "200.00","stock": 3, "tagIds": [1, 2, 3, 4]}

    &nbsp;&nbsp;This route creates a new product.

    &nbsp;&nbsp;Successful Return: &nbsp;The product IDs and tagIDs of the four ProductTag records that were just created, in JSON format.  The ProductTag tag table is necessary to associate tags and products, since they have a many-to-many relationship.

4. &nbsp;UPDATE: &nbsp;localhost:3001/api/products/5

    &nbsp;&nbsp;JSON body: &nbsp;{"product_name":"Basket","price":"250.00","stock":"4"}

    &nbsp;&nbsp;This route updates the product with the ID of 5.

    &nbsp;&nbsp;The following return value indicates the update was successful: &nbsp;[1]

5. &nbsp;DELETE: &nbsp;localhost:3001/api/products/5

    &nbsp;&nbsp;This route deletes the product with the ID of 5.

    &nbsp;&nbsp;The following return value indicates the deletion was successful: &nbsp;1

**Tag Routes**

1. &nbsp;GET: &nbsp;localhost:3001/api/tags/

    &nbsp;&nbsp;Successful Return: All tags and their associated product data

2. &nbsp;GET: &nbsp;localhost:3001/api/tags/1

    &nbsp;&nbsp;Successful Return: The tag with the ID of 1 and its associated product data

3. &nbsp;POST: &nbsp;localhost:3001/api/tags/

    &nbsp;&nbsp;JSON body: &nbsp;{"tag_name":"Movies"}

    &nbsp;&nbsp;This route creates a new tag.

    &nbsp;&nbsp;Successful Return: The created tag in JSON format.

4. &nbsp;PUT: &nbsp;localhost:3001/api/tags/1

    &nbsp;&nbsp;JSON body: &nbsp;{"tag_name":"Unicorns"}

    &nbsp;&nbsp;This route updates the tag with the ID of 1.

    &nbsp;&nbsp;The following return value indicates the update was successful: &nbsp;[1]

5. &nbsp;DELETE: &nbsp;localhost:3001/api/tags/4

    &nbsp;&nbsp;This route deletes the category with the ID of 4.

    &nbsp;&nbsp;The following return value indicates the deletion was successful: &nbsp;1

Please note that I left out return characters in the JSON request bodies and the successful responses from the update requests.  You can see what the requests and response look like with the return characters in the walkthrough video.

## Walkthrough Video Explanation

## Credits

I used the Xpert Learning Assistant AI to help out with writing some of the code.

## License

This project is under an MIT license.  Please see the license in the GitHub repository for more information.

## Badges

I don't have any noteworthy badges to display.

## Features

This is the back end/server code for a fictional company's database.  The user can create and query routes using Insomnia to retrieve data and see it being created, updated and deleted. 

## How to Contribute

This was an assignment that I personally completed, so N/A.

## Tests

N/A