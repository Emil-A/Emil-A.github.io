function draw() {
var canvas = document.getElementById('canvas');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		var rectShape = new Path2D();
		var rectDime = {x:10,y:20,width:20,height:40};
		rectShape.rect(rectDime.x, rectDime.y, rectDime.width, rectDime.height,);

		var circShape = new Path2D();
		var circDime = {x:10,y:20,start:20,end:40,clock:2*Math.PI,moveX:125,moveY:35};
		circShape.moveTo(circDime.moveX, circDime.moveY);
		circShape.arc(circDime.x, circDime.y, circDime.start, circDime.end, circDime.clock);

		ctx.fill(rectShape);
		ctx.fillStyle = '#8ED6FF';
		ctx.fill(circShape);
	}
}