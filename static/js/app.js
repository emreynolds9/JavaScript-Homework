// // Assign the data from `data.js` to a descriptive variable
// var people = data;

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create table from Data
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    d3.selectAll("td").remove();
  // Prevent the page from refreshing
    d3.event.preventDefault();

     // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

     // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(sightingsReport) {
        console.log(sightingsReport);
        var row = tbody.append("tr");
        
        Object.entries(sightingsReport).forEach(function([key,value]){
          console.log(`${key}, ${value}`);
          row.append("td").text(value)
      })
});




// // Step 1: Loop Through `data` and console.log each alien sighting object

});