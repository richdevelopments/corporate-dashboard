

var parseTime = d3.timeParse("%d/%m/%Y");
var formatTime = d3.timeFormat("%d/%m/%Y");

d3.json("data/calls.json").then(function(data){    
    
    data.map(function(d){
        d.call_revenue = +d.call_revenue
        d.units_sold = +d.units_sold
        d.call_duration = +d.call_duration
        d.date = parseTime(d.date)
        return d
    })

    allCalls = data;

    calls = data;

    nestedCalls = d3.nest()
        .key(function(d){
            return d.category;
        })
        .entries(calls)

    donut = new DonutChart("#company-size")

    revenueBar = new BarChart("#revenue", "call_revenue", "Average call revenue (USD)")
    durationBar = new BarChart("#call-duration", "call_duration", "Average call duration (seconds)")
    unitBar = new BarChart("#units-sold", "units_sold", "Units sold per call")

    stackedArea = new StackedAreaChart("#stacked-area")

    timeline = new Timeline("#timeline")

    $("#var-select").on("change", function(){
        stackedArea.wrangleData();
    })
})

function brushed() {
    var selection = d3.event.selection || timeline.x.range();
    var newValues = selection.map(timeline.x.invert)
    changeDates(newValues)
}

function changeDates(values) {
    calls = allCalls.filter(function(d){
        return ((d.date > values[0]) && (d.date < values[1]))
    })
    
    nestedCalls = d3.nest()
        .key(function(d){
            return d.category;
        })
        .entries(calls)

    $("#dateLabel1").text(formatTime(values[0]))
    $("#dateLabel2").text(formatTime(values[1]))

    donut.wrangleData();
    revenueBar.wrangleData();
    unitBar.wrangleData();
    durationBar.wrangleData();
    stackedArea.wrangleData();
}

// var margin = { left:80, right:20, top:50, bottom:100 };
// var height = 500 - margin.top - margin.bottom, 
//     width = 800 - margin.left - margin.right;

// var g = d3.select("#bubble-chart")
//     .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//         .attr("transform", "translate(" + margin.left + 
//             ", " + margin.top + ")");

// var time = 0;

// // Scales
// var x = d3.scaleLog()
//     .base(10)
//     .range([0, width])
//     .domain([142, 150000]);
// var y = d3.scaleLinear()
//     .range([height, 0])
//     .domain([0, 90]);
// var area = d3.scaleLinear()
//     .range([25*Math.PI, 1500*Math.PI])
//     .domain([2000, 1400000000]);
// var continentColor = d3.scaleOrdinal(d3.schemePastel1);

// // Labels
// var xLabel = g.append("text")
//     .attr("y", height + 50)
//     .attr("x", width / 2)
//     .attr("font-size", "20px")
//     .attr("text-anchor", "middle")
//     .text("GDP Per Capita ($)");
// var yLabel = g.append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", -40)
//     .attr("x", -170)
//     .attr("font-size", "20px")
//     .attr("text-anchor", "middle")
//     .text("Life Expectancy (Years)")
// var timeLabel = g.append("text")
//     .attr("y", height -10)
//     .attr("x", width - 40)
//     .attr("font-size", "40px")
//     .attr("opacity", "0.4")
//     .attr("text-anchor", "middle")
//     .text("Jan");

// // X Axis
// var xAxisCall = d3.axisBottom(x)
//     .tickValues([400, 4000, 40000])
//     .tickFormat(d3.format("$"));
// g.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height +")")
//     .call(xAxisCall);

// // Y Axis
// var yAxisCall = d3.axisLeft(y)
//     .tickFormat(function(d){ return +d; });
// g.append("g")
//     .attr("class", "y axis")
//     .call(yAxisCall);

// d3.json("data/calls.json").then(function(data){

//     // Clean data
//     const formattedData = data.map(function(date){
//         return date[''].filter(function(team){
//             var dataExists = (team.units_sold && team.date);
//             return dataExists
//         }).map(function(team){
//             team.units_sold = +team.units_sold;
//             team.date = +team.date;
//             return team;            
//         })
//     });

//     // Run the code every 0.1 second
//     d3.interval(function(){
//         // At the end of our data, loop back
//         time = (time < 214) ? time+1 : 0
//         update(formattedData[time]);            
//     }, 100);

//     // First run of the visualization
//     update(formattedData[0]);

// })

// function update(data) {
//     // Standard transition time for the visualization
//     var t = d3.transition()
//         .duration(100);

//     // JOIN new data with old elements.
//     var circles = g.selectAll("circle").data(data, function(d){
//         return d.team;
//     });

//     // EXIT old elements not present in new data.
//     circles.exit()
//         .attr("class", "exit")
//         .remove();

//     // ENTER new elements present in new data.
//     circles.enter()
//         .append("circle")
//         .attr("class", "enter")
//         .attr("fill", function(d) { return teamColor(d.team); })
//         .merge(circles)
//         .transition(t)
//             .attr("cy", function(d){ return y(d.date); })
//             .attr("cx", function(d){ return x(d.units_sold) })
//             .attr("r", function(d){ return Math.sqrt(area(d.call_revenue) / Math.PI) });

//     // Update the time label
//     timeLabel.text(+(time + 1800))
// }