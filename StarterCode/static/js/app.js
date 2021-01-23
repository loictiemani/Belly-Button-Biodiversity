// Belly Button Biodiversity - Plotly.js
function buildPlot(sample) {
    d3.json("samples.json").then(function(data){ 

        console.log(data)
    var ids = data.samples[0].otu_ids;
    console.log(ids);
    var sampleValues = data.samples[0].sample_values.slice(0,10).reverse();
    console.log(sampleValues);
    var  labels = data.samples[0].otu_labels.slice(0,10);
    console.log(labels);
    //display the top 10 OTUs found in that individual.
    var otu_top = data.samples[0].otu_ids.slice(0,10).reverse();

    // get the otu id's to the plot
    var otu_id = otu_top.map(d => "OTU " + d);
    console.log(`OTU IDS: ${otu_id}`)

    var trace = {
        x: sampleValues,
        y: otu_id,
        text:labels,
        type: "bar",
        orientation: "h"
    };
    var data = [trace];

    var layout ={
        title: "Top 10 OTU",
        barmode: "group",
        yaxis: {tickmode:"linear"}
    };
    Plotly.newPlot("bar", data, layout)   
    
    

    //the bubble chart
})

}

buildPlot();
function readData(sample){

    // Use `d3.json` to Fetch the Metadata for a Sample
        d3.json("samples.json").then(function(data) {
    
            //console.log(data)
    
            
            // use .html("") to clear any existing Data
            var panel = d3.select("#sample-metadata");
            panel.html("");
    
            // Use object.entries to add Each key value pair to the panel
    
            Object.entries(data).forEach(([key, value]) =>{
    
            panel.append("h6").text(key,value);
            //console.log(key, value)
    
            // use d3 to append new tags for Each-Value in the MetaData
            })
            // Bonus: 
           // buildGauge(data.WFREQ);
        });
    };
    //readData();
    
    //function buildCharts(sample) {
    
       // d3.json("samples.json").then(function(data) {
           
            //const sample_values = data.samples_values;
           // const otu_ids =data.otu_ids;
            //const otu_lables = data.otu_labels;
    
    
    
        //})
    //}
    
    