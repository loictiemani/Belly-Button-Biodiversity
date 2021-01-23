// Belly Button Biodiversity - Plotly.js
function buildPlot(sample) {
    d3.json("samples.json").then(function(data){ 

        //console.log(data)
    var ids = data.samples[0].otu_ids;
    //console.log(ids);
    var sampleValues = data.samples[0].sample_values
    //console.log(sampleValues);
    var  labels = data.samples[0].otu_labels
    //console.log(labels);
    //display the top 10 OTUs found in that individual.
    var otu_top10 = data.samples[0].otu_ids.slice(0,10).reverse();
    var top10sampleValues = sampleValues.slice(0,10).reverse();
    var  top10labels = labels.slice(0,10);
    
    // get the otu id's to the plot
    var otu_id = otu_top10.map(d => "OTU " + d);
    //console.log(`OTU IDS: ${otu_id}`)

    var trace1 = {
        x: top10sampleValues,
        y: otu_id,
        text:top10labels,
        type: "bar",
        orientation: "h"
    };
    var data = [trace1];

    var layout ={
        title: "Top 10 OTU",
        barmode: "group",
        yaxis: {tickmode:"linear"}
    };
    Plotly.newPlot("bar", data, layout)   
    
    

    //the bubble chart

    var trace2 ={

        x: ids,
        y: sampleValues,
        text:labels,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: ids,
            colorscale: "Earth"          
        },
        
    }

    var data2 =[trace2]

    var layout2 = {
        title: "bubble",
        showlegend: true,
        height: 600,
        width: 1000

    };
    Plotly.newPlot("bubble", data2, layout2)
})

}

buildPlot();
function readData(sample){

    // Use `d3.json` to Fetch the Metadata for a Sample
        d3.json("samples.json").then(function(data) {
    
            //console.log(data)
            resultArray=data.metadata.filter(sampleObj => sampleObj.id==sample);
            console.log(resultArray)
            
            // use .html("") to clear any existing Data
            var panel = d3.select("#sample-metadata");
            panel.html("");
    
            // Use object.entries to add Each key value pair to the panel
    
            Object.entries(resultArray[0]).forEach(([key, value]) =>{
    
            panel.append("h6").text(`${key}: ${value}`);
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
    
function init() {
    drop_down=d3.select('#selDataset');

    d3.json("samples.json").then((data) => {
        ids_selection=data.names

        //loop through ids_selection and append option to drop_down
        ids_selection.forEach((sample)=>
        {
            drop_down.append('option').text(sample).property("value", sample)
        })

        //grab the first sample and build the charts on the page for page load
        firstSample=ids_selection[0]
        //buildPlot(firstsample)
        readData(firstSample)
    })
}

function optionChanged (newSample){
    //build plots
    buildPlot(newSample)
    //change meta data on panel
    readData(newSample)
}

//call init for page load
init()