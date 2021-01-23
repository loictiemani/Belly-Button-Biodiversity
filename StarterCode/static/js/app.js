// Belly Button Biodiversity - Plotly.js

function readData(sample){

// Use `d3.json` to Fetch the Metadata for a Sample
d3.json("samples.json").then(function(data) {

    console.log(data)

});
};
readData();