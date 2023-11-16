# E-Commerce Back End

## Description

My motivation for building this project was to gain experience with writing server routes using the JavaScript Sequelize package.  I built this project so that I could learn about Sequelize and how to use it effectively.  This project is the back end code for what appears to be a hypothetical storefront.  I am taking a guess because I don't have front end code for this project.  The project solves the problem of a company with a storefront needing an effective back end so that they can retrieve data about their products, post new data, and update and delete existing data.  For this project, I learned about creating server routes with Javascript.  I also learned about creating models with Sequelize.

## Table of Contents (Optional)

This README isn't that long, so N/A.

## Note to Grader

I realized after I made the video that the text in Insomnia on the video is pretty small on laptop screens.  I can still read it on the laptop screen I am using.  I used the default text size in Git Bash for my other walkthrough videos and I haven't had any complaints about it so far.  I have included the Walkthrough Video Explanation section to help you know what is going on in the walkthrough video.  If the text size is still a problem, let me know and I can redo the video. 

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

    &nbsp;&nbsp;JSON body: &nbsp;{"product_name": "Basketball", "price": "200.00","stock": 3, "tagIds": [1, 2, 3, 4]}

    &nbsp;&nbsp;This route creates a new product.

    &nbsp;&nbsp;Successful Return: &nbsp;The product IDs and tagIDs of the four ProductTag records that were just created, in JSON format.  The ProductTag tag table is necessary to associate tags and products, since they have a many-to-many relationship.

4. &nbsp;UPDATE: &nbsp;localhost:3001/api/products/4

    &nbsp;&nbsp;JSON body: &nbsp;{"product_name":"Basket","price":"250.00","stock":"4"}

    &nbsp;&nbsp;This route updates the product with the ID of 4.

    &nbsp;&nbsp;The following return value indicates the update was successful: &nbsp;[1]

5. &nbsp;DELETE: &nbsp;localhost:3001/api/products/4

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

To view the walkthrough video for this project, please use the following link: [https://drive.google.com/file/d/1S3p81HvrWSwOqayyoyVG9j9sDy9ct1i4/view](https://drive.google.com/file/d/1S3p81HvrWSwOqayyoyVG9j9sDy9ct1i4/view).  Please note, this video was originally two minutes and 35 seconds long.  I cut it down to one minute and 59 seconds because the blog post on creating walkthrough videos for this course found [here](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) said to keep walkthrough videos to a maximum of two minutes.  There was a lot I felt I needed to cover in these two minutes.  Thus, the video sort of appears to jump around in places.  If you are having trouble reading the output from any of the routes, please pause the video.

To start off, I run the command "mysql -u root -p" to initiate a connection to the mysql2 database.  I then paste my password in and hit **Enter**.  Next, I run the command "source db/schema.sql" to delete and recreate the database.  Next, I run the "exit" command to exit the mysql shell and go back to Git Bash.  Once back in Git Bash, I run the command "npm run seed".  This runs the "seed" script, which runs the seed files in my seeds folder, thereby initializing the newly created database with data.  Once this command runs successfully, I run the command "npm start" to start up the server.  Next, I switch over to Insomnia. 

In Insomnia, first I run the category routes.  I start off with those routes by running the GET localhost:3001/api/categories/ route, which gets all category data.  The expected data is returned successfully.  Next, I run the POST localhost:3001/api/categories/ route, with a JSON body of {"category_name": "Movies"}, which creates a category with the name of "Movies".  The system returns the created category, which means the category was created successfully.  Next, to be sure the new category was actually created successfully, I run the GET localhost:3001/api/categories/:id route.  This route pulls whichever category has the ID value that I pass in via the URL.  I give the ID parameter a value of 6.  The system pulls and successfully returns the newly created category, which has an ID value of 6.  Next, I run the PUT: localhost:3001/api/categories/:id, route, with a JSON body of {"category_name": "TV Programs"} which updates the category name of the category represented by the ID in the URL to "TV Programs".  The system returns the characters "[1]", which indicate that the update has been completed successfully.  However, to be certain the update was successful, I go back and run the GET localhost:3001/api/categories/:id route, passing in an ID of 6.  The system returns the category, and the name of the category has been successfully updated to be "TV Programs.  Next, I run the DELETE: localhost:3001/api/categories/:id route, which deletes the category represented by the ID the user passes in.  I pass in an ID of 6, which is the ID of the category I just created.  The system responds with the character "1", which indicates that the deletion was successful.  To show that the deletion was successful, I run the GET localhost:3001/api/categories/:id route and pass in an ID of 6.  The system responds by returning "null", indicating that there isn't a category with an ID of 6, and therefore indicating that the deletion was successful.

Next, I run the product routes.  The first product route I run is the GET localhost:3001/api/products/ route, which gets all product data and includes data from the Category and Tag tables.  After showing the data that was returned, I run the POST localhost:3001/api/products/ route, with a JSON body of {"product_name": "Basketball","price": "200.00","stock": 3,"category_id": 3,"tagIds": [1, 2, 3, 4]}, which gives it a name of "Basketball", a price of 200.00, a stock of 3, links it to the "Music" category (id:3), and the tags of "rock music" (id:1), "pop music" (id:2), "blue" (id:3), and "red" (id:4). The program returns the records that were created in the ProductTag table for the new product, indicating the new product was created successfully.  If no tag IDs had been given, the system would have returned the JSON representation of the product that was created. Next, I run the GET: localhost:3001/api/products/:id route, which fetches whichever product has the ID value that I pass in.  I pass in an ID of 6.  The system returns the newly created category, indicating that it was in fact created successfully.  After this I run the PUT: localhost:3001/api/categories/:id route, with a JSON body of {"product_name": "Basket","price": "250.00","stock": "10"}.  I pass in an ID of 6.  This will update the product with an ID number of 6.  The name will become "Basket", the price will become 250.00, and the number of items in stock will become 10.  The system responds with the characters of    "[1]", indicating that the update is successful.  To check this, I run the GET: localhost:3001/api/products/:id route and pass in an ID of 6.  The system returns the updated product, which has a name of "Basket", a price of 250.00 and a stock of 10.  The final product route I run is the DELETE: localhost:3001/api/categories/:id route, which will delete the product with the ID that I pass in.  I pass in the ID of 6, which is the ID of the product I just created.  The system returns the character "1", indicating that the deletion was successful.  To check this, I run the  GET localhost:3001/api/categories/:id and pass in an ID of 6.  The system returns the value "null", which indicates that there is no longer a product with an ID of 6, thereby indicating that the deletion was a success.

Finally, I run the tag routes.   The first tag route I run is the GET localhost:3001/api/tags/ route, which gets all tag data and includes the respective product data, and also, for good measure, includes the data from the ProductTag table.  After scrolling through the returned data, I run the POST localhost:3001/api/tags/ route with a JSON body of {"tag_name": "Movies"}, which creates a tag with the name of "Movies".  The system returns the created tag, which means the tag creation was successful.  To make sure the tag creation was successful, I run the GET: localhost:3001/api/products/:id route, which will return whichever tag has the ID value that I put in.  I send the system an ID of 6.  The system returns the newly created tag, indicating that the new tag was successfully created.  After this, I run the PUT: localhost:3001/api/categories/:id route, with a JSON body of {"tag_name": "Unicorns"}.  The system returns the characters "[1]", indicating that the update is successful.  To check on the update, I run the GET: localhost:3001/api/tags/:id route and pass in an ID of 9.  The system returns the updated tag, which has a name of Unicorns.  The final tag route I run is the DELETE: localhost:3001/api/categories/:id route, which will delete the product with the ID that I pass in an ID of 9.  The system responds with the character "1", indicating that the deletion is successful.  Finally, I run the I run the GET: localhost:3001/api/products/:id route and pass in an ID of 9.  The system returns the text "null", which indicates that there is no longer a tag with an ID of 9, and thus that the deletion was successful.

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