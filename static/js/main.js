

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
