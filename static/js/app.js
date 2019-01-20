var tableData = data;

var tbody = d3.select("tbody");
var dataSet = data;
var inputCountry = "";

//display contents of passed array in html table
function displayData(filteredData){

    d3.selectAll("tbody>tr").remove();
    //d3.event.preventDefault();

    filteredData.forEach(element => {

        var row = tbody.append("tr");
    
        Object.entries(element).forEach(function([key,value]){

            var cell = row.append("td").text(value);
        });
    }
    );
};

//initialize selected country from the drop down
function getData(country) {
    inputCountry = country;
};

function filterList(){
    
    console.log(inputCountry);
    
    var inputDateField = d3.select("#datetime");
    var inputDate = inputDateField.property("value");

    var inputStateField = d3.select("#state");
    var inputState = inputStateField.property("value");

    var inputCityField = d3.select("#city");
    var inputCity = inputCityField.property("value");

    var inputShapeField = d3.select("#shape");
    var inputShape = inputShapeField.property("value");

    if (inputCountry ) {
        dataSet = dataSet.filter(sightings => sightings.country === inputCountry);
    };

    if (inputState ) {
        dataSet = dataSet.filter(sightings => sightings.state === inputState);
        }
    if (inputCity ) {
        dataSet = dataSet.filter(sightings => sightings.city === inputCity);
    }
    if (inputShape) {
        dataSet = dataSet.filter(sightings => sightings.shape === inputShape);
    }
    if (inputDate ) {
        dataSet = dataSet.filter(sightings => sightings.datetime === inputDate);
    }

    displayData(dataSet) ; 
}

displayData(data);

var button = d3.select("#filter-btn");

button.on("click", function() {
    // clear existing data
    d3.selectAll("tbody>tr").remove();
    d3.event.preventDefault();
    // initialize data set with original data
    dataSet = data;
    // call function to apply filters
    filterList();
    
});