# Corporate Sales Dashboard

## Introduction
----
<div align="center">
    <img src="https://i.ibb.co/XyRKQ5c/Screenshot-2019-11-25-at-09-47-54.png" href="https://richdevelopments.github.io/corporate-dashboard/" target="_blank" rel="noopener" alt="Image of how home page looks on all screen sizes" aria-label="Image of how home page looks on all screen sizes" />
</div>
<br>

[Corporate Sales Dashboard](https://richdevelopments.github.io/corporate-dashboard/) is a **data dashboard** for a group of corporate sales teams, built using D3.js. The sales teams sell all kinds of goods to companies across the nation, selling raw materials like planks of wood and bags of cement to construction companies, selling tv's and computers to electrical stores, fridges and washing machines to household appliance stores and furniture to a few different outlets.
The data dashboard is to find out which parts of the business are doing better than others.
The sales teams are split between 4 regions - Northeast, South, Midwest and West, and they want to see how their stats compare between them.

To use the dashboard the user can select a metric from the dropdown, either Revenue, Call Time and Units Sold.
The user can then drag over the Timeline chart to select and zoom in on a specific period in the year, to see and compare the performanceof all 4 regions.
The Bar Charts on the right will change accordingly, displaying an average og each of the metrics and the Pie Chart changing displaying company size.


## Table of Contents
----
1. [UX](#ux)
    - [Goals](#goals)
        - [User Goals](#user-goals)
        - [Corporate Sales Dashboard Goals](#corporate-sales-dashboard-goals)
    - [User Stories](#user-stories)
        - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
    - [Wireframes](#wireframes)

2. [Features](#features)
    - [Existing Features](#existing-features)
        - [Dashboard Page](#dashboard-page)
    - [Features Left to Implement](#features-left-to-implement)

3. [Data](#data)

4. [Technologies Used](#technologies-used)

5. [Testing](#testing)

6. [Deployment](#deployment)

7. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)

8. [Contact](#contact)

9. [Disclaimer](#disclaimer)


----

# UX

## Goals

### User Goals


The central target audience for Corporate Sales Dashboard are:
- Businesses who sell a variety of products.
- Businesses who want to analyse their companies key performance indicators.
- Businesses who want to visually track their companies key performance indicators.
- Businesses who want to visually compare KPI, metric and key data points to monitor the health of their business or departments.

User goals are:

- Have somewhere to view and analyse their companies sales performance throughout the year.
- Have somewhere to visually compare the sales performance of different areas of the company.
- To be able to select a specific time in the year to visualize and compare the companies performance.
- To be able to visually monitor the health of their business and departments. 

### Corportate Sales Dashboard Goals

- Provide an effective, easy to use dashboard for businesses and sales teams to visually analyse their companies statistics throughout the year.

- So that I can learn and practice frontend programming using D3.js. To combine the use of HTML, CSS, Bootstrap and JavaScript.

## User Stories


As a user of Corportate Sales Dashboard Goals I expect/want/need:

1. To easily find what I am looking for, I want the layout of the dashboard to make sense so I am not confused or put off using it.

2. The information I am presented with to be laid out in a way that is easy for me to navigate and digest, so that I find what I need quickly and efficiently.

3. To search for different times in the year using the timeline to compare company performance of a specific time.

4. The dashboard to provide easy access to the contact information.

6. As a user accessing this site from a mobile phone or tablet, I want the dashboard to have been designed responsively so that it is still easy to navigate and use on my smaller devices.


## Design Choices

I wanted the Corportate Sales Dashboard to have a smart corporate feel, keeping things simple to emphasis the data and functioning. The following design choices were made with this in mind:

### Fonts

- The primary font `Source Sans Pro` was chosen for the main text of the site because it is easy to read and complements the fonts chosen very well. A extra reason for picking this font is that it is still easy to read when printed small.

- I used the `Sans-Serif` font for the headings and axis because it is simple and clear. The font stands out very well.

### Logo

I created the Corportate Sales Dashboard logo at designevo.com

### Colours

- The colours for this project were chosen because I wanted to the site to look smart and corporate and I feel I have achieved this.

- A dark purple colour was chosen for the main text and headers as it made the text stand out on the lighter background.

- The navbar background colour is white, which makes the logo stand out and looks smart.

- The body colour is grey for a corporate feel.

- I tried to make the 4 regions in the stacked chart colourful so they stand out on the white background. As also the rest of the page is plane.

- The bar charts are a dark purple so they stand out on the white background but are also differeent to the stacked chart.

### Styling

- The .attr() and .style() attributes were used to style and animate the charts.

- Bootstrap grid system was utilised in Corportate Sales Dashboard to display nicely on all platforms. 

- Hover Effects

    - The **pie chart** has a hover effect that when hovering the different sections of the chart it displays the value that it represents.


## Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope Plane part of the design and planning process for this project. The design did change some what in development process.

- [Dashboard - Desktop](https://i.ibb.co/CVt2HmH/Corporate-Sales-Dashboard.png)
- [Dashboard - Tablet](https://i.ibb.co/hF6P5Pb/CSD-tablet.png)
- [Dashboard - Mobile](https://i.ibb.co/Q8Z1CYG/CSD-mobile.png)

# Features

## Existing Features

- Navbar

    - The navigation bar features the Corportate Sales Dashboard logo in the center.
       

- Footer
    - The footer features:
        - Contact information for Corportate Sales Dashboard.



### Dashboard Page

<div align="center">
    <img src="https://i.ibb.co/XyRKQ5c/Screenshot-2019-11-25-at-09-47-54.png" href="https://richdevelopments.github.io/corporate-dashboard/" target="_blank" rel="noopener" alt="Image of how home page looks on all screen sizes" aria-label="Image of how home page looks on all screen sizes" />
</div>
<br>

**Headings**

- Most of the charts have subheadings above them. The Stacked Chart has the date range above it. 
This dynamically changes depending on the date range selected.

**Charts**

Stacked Chart -
 - The Stacked chart shows how ratios are changing over time.
 - Shows how the entire companies value has been changing over time.
 
- The user can zoom in on a specific date range selected on the timeline chart and the X and Y axis of the Stacked Chart will dynamically change to the selected time in the year and the chart will display that data associated to that time range.

- The user can select a metric - Revenue, Call Time and Units Sold from the dropdown menu then that data will be displayed in the Stacked Chart.


I am using the d3.max function on the array of data which loops through every period. Using the map function returning each of the values into the array called vals. The date value is 0, then I'm returningresult of adding each of these values together which is provided by the d3 sum function.
The result is that this function will return the largest total value from the 4 regions in 2017.
I am then using this to set the maximum Y domain. It's really useful to do be able to do this with this chart because I can simultaniously tell a story of the performance of the company and see which regoins have contributed the most.
```
vis.maxDateVal = d3.max(vis.dataFiltered, function(d){
        var vals = d3.keys(d).map(function(key){ return key !== 'date' ? d[key] : 0 });
        return d3.sum(vals);
    });

    vis.x.domain(d3.extent(vis.dataFiltered, (d) => {  return parseTime(d.date); }));
    vis.y.domain([0, vis.maxDateVal]);
```


Timeline -

Use to pick the date range of the Stacked Chart using the brush generator.
The X axis will always show the full extent of the data.
The brush generator - 
```
// Initialize brush component
    vis.brush = d3.brushX()
        .handleSize(10)
        .extent([[0, 0], [vis.width, vis.height]])
        .on("brush end", brushed)

    // Append brush component
    vis.brushComponent = vis.g.append("g")
        .attr("class", "brush")
        .call(vis.brush);
```
Using the ```.brushX``` call explicitly tells d3 that I want to create a one dimensional brush that goes in the X direction. 
Using the ```.extent``` method to define the maximum and minimum coordinates that the brush should run between. Which means that D3 will create an overlay of the brush that runs from the 0,0 point of the visualization area all the way down to the bottom corner of the SVG grid. This means the user can draw a brush over any part of the visualizartion area. I'm then calling the brush in the context of the visualization by attest a group to the visuslization area buy giving it a call of brush```attr("class", "brush")``` and then using the ```.call``` method to run the brush generator ```.call(vis.brush);```

Pie Chart -

- Displays the size of the companies. When hovering over a slice displays the units of each.

Bar Chart -

- The Bar Charts display summaries of the data dependant of the date range selected on the timeline and what metrics are slected in the dropdown.

**Dropdown**

- Select to display the diferent metrics Revenue, Call Time and Units Sold across all 4 regions.

## Features Left to Implement

1. Add more areas of a company to display the data of

2. Add more interesting graphs


# Data
 - For the data for this project I am using a JSON file which I generated using an online JSON generator - https://mockaroo.com/

# Technologies Used

### Tools
- [Imgbb](https://imgbb.com) to store all external images for this project.
- [GitPod](https://www.gitpod.io/) for developing and to handle version control.
- [GitHub](https://github.com/) to store and share all project code.
- [Am I Responsive](http://ami.responsivedesign.is/) to create the images in this readme file of each page displayed on different screen sizes.
- [Designevo](designevo.com) 

### Libraries
- [D3](https://d3js.org/) to create the charts.

- [JQuery](https://jquery.com) to simplify DOM manipulation and styling.
- [Bootstrap](https://www.bootstrapcdn.com/) to simplify the structure of the website and make the website responsive easily.

### Languages
- This project uses HTML, CSS and JavaScript programming languages.

# Testing
## Manual Testing
Below is a detailed account of all the manual testing that has been done to confirm all areas of the site work as expected.

### Testing undertaken on desktop

All steps on desktop were repeated in browsers: Firefox, Chrome and Internet Explorer and on two different desktop screen sizes.

#### Elements on the Dashboard page

1. Navbar
    Logo displays in the Navbar as expected __Pass__


- __Pass__


### Testing undertaken on tablet and phone devices
All steps below were repeated to test mobile and tablet specific elements on my iPhoneX and tablet, in both the Safari browser and Chrome internet browser.

Responsive design was also tested in the Chrome Developer Tools device simulators on all options and orientations.


### Bugs Descovered
#### Solved Bugs



#### Unsolved Bugs


# Deployment

 The site is now successfully deployed.

# Credits

## Content

#### Stacked Chart


#### Bar Charts

- For bar charts I used ideas that I learned from the course material and also this blog by Mike Bostock also really helped - https://observablehq.com/@d3/bar-chart

#### Pie Chart

https://github.com/d3/d3-shape#arcs

## Acknowledgements

Special thanks to my mentor Aaron Sinnott for his patience and willingness to teach me his coding expertise and and also tutor support who are always awesome.

## Disclaimer
The content of this website is educational purposes only.

