// Bonus 

function buildGauge(wfreq){
//  Enter the washing frequency betwenn 0 and 180

    var level = parseFloat(wfreq)* 20;
   // Triger to calculate meter point
   
   var degrees = 180 - level;
   var redius = 0.5;
   var radians = (degrees * Math.PI)/  100;
   var x = radius* Math.cos(radians);
   var y = radius * Math.sin(radians);

   // Path: 

   var mainPath = "M -.0 -0.05 L .0 0.05L";
   var pathX = string(x)
   var space = '';
   var pathY =string (y);
   var pathEnd = "Z";
   var path =mainPath.concat(pathX, space, pathY, pathEnd);

   var data =[ 
       {
           type: "scatter",
           x:[0],
           y:[0],
           marker : { size: 12, color: "850000"},
           showlegend: false,
           name: "Freq",
           text: level,
           hoverinfo:"text +name"
       },
       {

        value : [ 50/ 9, 50/ 9 ,50 / 9, 50 / 9 ,50 / 9,50/9 ,50 / 9,50 /9,  ],
        rotation: 90
        
        }

    ]

    
}