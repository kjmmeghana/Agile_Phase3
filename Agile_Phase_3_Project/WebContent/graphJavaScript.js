function setVisibility(x)
{
	
	if(x=="Books")
	{		
		var select = document.getElementById("products");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var select1= document.getElementById("brand");
		var length = select1.options.length;
		for (i = length-1; i >= 1; i--) {
		  select1.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Novels";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Kids Books";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Notebooks";
		select.add(option);
	}
	if(x=="E-Gadgets")
	{		
		var select = document.getElementById("products");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var select1= document.getElementById("brand");
		var length = select1.options.length;
		for (i = length-1; i >= 1; i--) {
		  select1.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Smart Phones";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Laptops";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Tablets & iPads";
		select.add(option);
	}
	if(x=="Novels")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "The other side of me";
		select.add(option);
		var option = document.createElement("option");
		option.text = "The Book theif";
		select.add(option);
	}
	if(x=="Kids Books")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Dumbo the elephant";
		select.add(option);
		var option = document.createElement("option");
		option.text = "The Lion King";
		select.add(option);
	}
	if(x=="Notebooks")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Classmate";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Camlin";
		select.add(option);
	}
	if(x=="Smart Phones")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Samsung";
		select.add(option);
		var option = document.createElement("option");
		option.text = "iphone";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Nokia";
		select.add(option);
	}
	if(x=="Laptops")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Dell";
		select.add(option);
		var option = document.createElement("option");
		option.text = "HP";
		select.add(option);
	}
	if(x=="Tablets & iPads")
	{		
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Samsung Tablet";
		select.add(option);
		var option = document.createElement("option");
		option.text = "iPad series";
		select.add(option);
	}
}
function statusSelectTag(x)
{
	  setVisibility(x);
	  updateChart();
}
function updateChart()
{
	var x=document.getElementById("container");
	x.remove();
	document.getElementById("main").innerHTML="<div id='container'></div>";
	var chart = anychart.column();
	chart.animation(true);
	chart.title('Sales By Month for');
	var data=[1,2,3,4];
	for(var i=0;i<data.length;i++)
		data[i]+=Math.ceil(Math.random()*300)+20;
    var series = chart.column([
        ['January', data[0]],
        ['February', data[1]],
        ['March', data[2]], 
    ]);  

    chart.yScale().minimum(0);  

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');
    chart.xAxis().title('Months');
    chart.yAxis().title('Sales');
    chart.container('container');
chart.draw();

}