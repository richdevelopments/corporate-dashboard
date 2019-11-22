# Corporate Sales Dashboard


## Introduction
----
<div align="center">
    <img src="" href="" target="_blank" rel="noopener" alt="Image of how home page looks on all screen sizes" aria-label="Image of how home page looks on all screen sizes" />
</div>
<br>

[Corporate Sales Dashboard]() is a **data dashboard** for a group of corporate sales teams, built using D3.js. The sales teams sell all kinds of goods to companies across the nation, selling raw materials like planks of wood and bags of cement to construction companies, selling tv's and computers to electrical stores, fridges and washing machines to household appliance stores and furniture to a few different outlets.
The data dashboard is to find out which parts of the business are doing better than others.
The sales teams are split between 4 regions - Northeast, South, Midwest and West, and they want to see how their stats compare between them.

## Table of Contents
----
1. [UX](#ux)
    - [Goals](#goals)
        - [User Goals](#user-goals)
        - [Corporate Sales Dashboard Goals](#Corporate-sales-dashboard-goals)
    - [User Stories](#user-stories)
        - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
    - [Wireframes](#wireframes)

2. [Features](#features)
    - [Existing Features](#existing-features)
        - [Dashboard Page](#dashboard-page)
    - [Features Left to Implement](#features-left-to-implement)

3. [Technologies Used](#technologies-used)

4. [Testing](#testing)

5. [Deployment](#deployment)
    

6. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

7. [Contact](#contact)

8. [Disclaimer](#disclaimer)

----
## UX

## Goals

### User Goals


The central target audience for Corporate Sales Dashboard are:
- Businesses who sell a variety of products.
- Businesses who want to analyse their companies key performance indicators.
- Businesses who want to visually track their companies key performance indicators.
- Businesses who want to visually compare KPI, metric and key data points to monitor the health of their business or departments.

User goals are:

- Have somewhere to view and analyse their companies sales performance throughout the year.
- Have somewhere to visually compare the sales performance of different areas of the company.
- To be able to select a specific time in the year to visualize and compare the companies performance.
- To be able to visually monitor the health of their business and departments. 

### Corporate Sales Dashboard Goals

- Provide an effective, easy to use dashboard for businesses and sales teams to visually analyse their companies statistics throughout the year.

- So that I can learn and practice frontend programming using D3.js. To combine the use of HTML, CSS, Bootstrap and JavaScript.

## User Stories

### Visitor Stories

As a user of Corportate Sales Dashboard Goals I expect/want/need:

1. To easily find what I am looking for, I want the layout of the dashboard to make sense so I am not confused or put off using it.

2. The information I am presented with to be laid out in a way that is easy for me to navigate and digest, so that I find what I need quickly and efficiently.

3. To search for different times in the year using the timeline to compare company performance of a specific time.

4. To easily vote for the tutorial videos that I want to buy to improve my specific guitar techniques.

5. The site to provide easy access to the contact information.

6. As a user accessing this site from a mobile phone or tablet, I want the dashboard to have been designed responsively so that it is still easy to navigate and use on my smaller devices.


## Design Choices

I wanted the Corportate Sales Dashboard to have a smart corporate feel, keeping things simple to emphasis the data and functioning. The following design choices were made with this in mind:

### Fonts

- The primary font `Source Sans Pro` was chosen for the main text of the site because it is easy to read and complements the fonts chosen very well. A extra reason for picking this font is that it is still easy to read when printed small.

- I used the `Sans-Serif` font for the headings and axis because it is simple and clear. The font stands out very well.

### Logo

I created the Corportate Sales Dashboard logo at designevo.com

### Colours

- The colours for this project were chosen because I wanted to the site to look smart and corporate and I feel I have achieved this.

- A dark purple colour was chosen for the main text and headers as it made the text stand out on the lighter background.

- The navbar background colour is white, which makes the logo stand out and looks smart.

- The body colour is grey for a corporate feel.

- I tried to make the 4 regions in the stacked chart colourful so they stand out on the white background. As also the rest of the page is plane.

- The bar charts are a dark purple so they stand out on the white background but are also differeent to the stacked chart.

### Styling

- The .attr() and .style() attributes were used to style and animate the charts.

- Bootstrap grid system was utilised in Corportate Sales Dashboard to display nicely on all platforms. 

- Hover Effects

    - The **pie chart** has a hover effect that when hovering the different sections of the chart it displays the value that it represents.


## Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope Plane part of the design and planning process for this project. The design did change some what in development process.

- [Home]()

# Features

## Existing Features

- Navbar

    - The navigation bar features the Corportate Sales Dashboard logo in the center.
       

- Footer
    - The footer features:
        - Contact information for Corportate Sales Dashboard.


### Dashboard Page

<div align="center">
<img src="" alt="Corportate Sales Dashboard page on all major screen sizes" >
</div>

**Headings**

- The Main page has 

**Charts**

Stacked Chart -

Timeline -

Pie Chart -

Bar Chart -

**Dropdown**

-

## Features Left to Implement

1. The user Profile page needs more options such as the option to add more personal details and even a profile picture.

2. A part of the site where businesses can create an account and advertise their company, products and events.


# Data
 - Json file

# Technologies Used

### Tools
- [Imgbb](https://imgbb.com) to store all external images for this project.
- [GitPod](https://www.gitpod.io/) for developing and to handle version control.
- [GitHub](https://github.com/) to store and share all project code.
- [Am I Responsive](http://ami.responsivedesign.is/) to create the images in this readme file of each page displayed on different screen sizes.

### Libraries
- [D3](https://d3js.org/) to create the charts.
- [JQuery](https://jquery.com) to simplify DOM manipulation and styling.
- [Bootstrap](https://www.bootstrapcdn.com/) to simplify the structure of the website and make the website responsive easily.

### Languages
- This project uses HTML, CSS, JavaScript and Python programming languages.

# Testing
## Manual Testing
Below is a detailed account of all the manual testing that has been done to confirm all areas of the site work as expected.

### Testing undertaken on desktop

All steps on desktop were repeated in browsers: Firefox, Chrome and Internet Explorer and on two different desktop screen sizes.

#### Elements on every page

1. Navbar
    - Hover over each link, confirm the hover effect works as expected. __Pass__
    - Click the **Guitar Shed logo**, confirm it takes the user to the home page. __Pass__
    - Click the **Home** link, confirm it takes the user to the home page. __Pass__
    - Click the **Store** link, confirm it takes the user to the store page. __Pass__
    - Click the **Register** link, confirm it takes the user to the register page. __Pass__
    - Click the **Log In** link, confirm it takes the user to the log in page. __Pass__
    - Log into Guitar Shed, confirm that the navbar no longer displays the **Register** or **Log In** links but does now display the **Polls** **Cart** and dropdown menu. __Pass__
    - Hover over the dropdown menu, confirm it opens smoothly with javascript. __Pass__
    - Click the **Polls** link, confirm it takes the user to their polls page. __Pass__
    - Click the **Cart** link, confirm it takes the user to the cart page. __Pass__
    - Click the **Profile** link, confirm it takes the user to their profile page.__Pass__
    - Click the **Log out** link, confirm the user is logged out and the navbar returns to the logged out configuration. __Pass__


#### Home Page

- Video
    - Confirm that the video loads at a reasonable speed, and that the image is sharp and clear and plays well. __Pass__

- Headings
     - Confirm the heading for the page is easy to read. __Pass__

- Page text
    - Confirm the text for the page is easy to read. __Pass__


#### Register Page

- Go to Register page, confirm the form is displayed correctly. __Pass__

- Try to create a new account that already exists (same email and username), confirm that the *error alert* is informing the user that this **A user with that username already exists.**. __Pass__

- Try to create a new account with a new email address but a username that already exists in the database, confirm that the alert informing the user that this **username is already in use**. __Pass__

- Try to create a new account with a new username but a email address that already exists in the database, confirm that the alert informing the user that this **email is already registered**. __Pass__

- Create a new account with new username and email address, confirm that the **account conformation ** is launched with a log in button provided. __Pass__

- Click the log in button, confirm that it takes the user to the log in page. __Pass__

#### Log In Page

- Go to the log in page, confirm that the log in form is displayed correctly. __Pass__

- Try to log in with a username that do not exist in the database, confirm that the error alert is displayed to inform the user that **Your username or password is incorrect**. __Pass__

- Repeat above with incorrect email address, confirm same reaction. __Pass__

- Try to log in with an existing username but incorrect password, confirm that the error alert is displayed with a message informing the user of **Your username or password is incorrect**. __Pass__

- Try to **log in** using correct **username and password**, confirm that this is successful. __Pass__

- Log out, then try to log in using correct **email and password**, confirm that this is successful. __Pass__

#### Log Out Feature

- When logged in, click the log out link, confirm to the user **You have successfully been logged out**. __Pass__

#### Profile Page

- Go to the settings page for the account I am logged in as, confirm that the page is displaying correctly. __Pass__

#### Polls Page

- Go to Poll page, confirm the form is displayed correctly. __Pass__

- Clicking on a radio button under a subject/option then clicking vote button, increases the number of votes for that subject/option. __Pass__

- After voting on a poll, the user can no logger vote on that poll and the radio buttons and vote buttons are no longer displayed. __Pass__
- When a poll has expired a message "Poll Expired. Purchase winner!" with a Buy button is displayed. __Pass__
- The Buy button takes redirects to the Store. __Pass__

#### Cart Page

- Go to Cart page, confirm the form is displayed correctly. __Pass__
- If I access the the shopping cart at a user or as admin or staff member, the pages is the same. I have an amend button and checkout button. __Pass__
- Changing the quantity to 0 removes the item from the cart and brings me to an empty cart screen. __Pass__


#### Checkout Page
- Go to Checkout page, confirm the form is displayed correctly. __Pass__
 - The checkout page shows the items selected from the shopping cart.  The total for all items chosen is shown  above _Payment Details_ form. __Pass__
 - If I leave out the details on the payment details form and click _submit payment_, an alert appears on the form field to show the items that need to be filled in. __Pass__
 - If I fill out the form and provide the stripe developer credit card details, and click Submit Payment, I get a message saying my payment was successful. __Pass__


### Testing undertaken on tablet and phone devices
All steps below were repeated to test mobile and tablet specific elements on my iPhoneX and tablet, in both the Safari browser and Chrome internet browser.

Responsive design was also tested in the Chrome Developer Tools device simulators on all options and orientations.

#### Elements on every page

1. Navbar
- Open the website on mobile, confirm that the navbar is collapsed into a burger icon. __Pass__
- click the burger icon, confirm that the navbar list appears are expected. __Pass__
- When logged in, confirm that the navbar list appears as expected for someone logged in. __Pass__
- When on tablet, confirm that the navbar is not collapsed on my larger tablet screen, but is on the smaller tablet. __Pass__

2. Footer
- On mobile, confirm that the footer sections stack on top of each other as expected. __Pass__
- On tablet, confirm that the footer sections appear as expected. __Pass__


Responsive design was also tested in the Chrome Developer Tools device simulators on all options and orientations.

### Bugs discovered:
#### Solved bugs

1. Clicking the Add to cart button on a Product without adding a quantity displayed a page error. This was resolved by adding ```value="1" name="quantity" and type="number"``` to the Add to cart button. Now it will add a single product.

#### Unsolved bugs

1. Rendering video on mobile (Safari and Chrome).


# Deployment

 The site is now successfully deployed.

# Credits

## Content

- for bar chart - https://observablehq.com/@d3/bar-chart

## Media

### Images
- All images in the project were snapshots taken from my promotional video on the Home page.

## Code

- I used a small part of an app that used to be in the course called We_are_Social, suggested to me by my tutor Aaron Sinnott. This was a forum app which had a Poll app in it that could be added to a forum post. I used the Poll part as an idea for my Poll page, and heavily changed it to suit my website.

## Acknowledgements

Special thanks to my mentor Aaron Sinnott for his patience and willingness to teach me his coding expertise and giving me valuable industry advice.

## Disclaimer
The content of this website is educational purposes only.
