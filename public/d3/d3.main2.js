var width = 1280,
    height = 500

var image_w = 80,
    image_h = 80

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

var force = d3.layout.force()
    .gravity(.05)
    .distance(100)
    .charge(-500)
    .size([width *= 2 / 3, height *= 2 / 3]);

d3.json("/d3/graph.json", function(json) {

  json.nodes[0].x = width / 2
  json.nodes[0].y = height / 2
  json.nodes[0].fixed = true

  force
      .nodes(json.nodes)
      .links(json.links)
      .start();

  var link = svg.selectAll(".link")
      .data(json.links)
    .enter().append("line")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(json.nodes)
    .enter().append("g")
      .attr("class", "node")
      .on("click", click)
      .call(force.drag);


  node.append("image")
      .attr("xlink:href", function(d) { return d.image })
      .attr("x", function(d) { return d.width? -d.width / 2 : -image_w / 2 })
      .attr("y", function(d) { return d.height? -d.height / 2 : -image_h / 2 })
      .attr("width", function(d) { return d.width? d.width : image_w })
      .attr("height", function(d) { return d.height? d.height : image_h })

  node.append("text")
      .attr("dx", 0)
      .attr("dy", image_h)
      //.text(function(d) { return d.name });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});

function click(d) {
  window.location.href = d.href
}