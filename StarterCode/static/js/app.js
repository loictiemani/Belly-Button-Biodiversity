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
    
    