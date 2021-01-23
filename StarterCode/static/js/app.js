// Belly Button Biodiversity - Plotly.js

function readData(sample){

// Use `d3.json` to Fetch the Metadata for a Sample
d3.json("samples.json").then(function(data) {

    console.log(data)
    // use .html("") to clear any existing Data
    var panel = d3.select("#sample-metadata");
    panel.hmtl("");

    // Use object.entries to add Each key value pair to the panel

    Object.entries(data).forEach(function[Key, value])





});
};
readData();


