let clicks = 0
let transparency = 1

function setup() {
  noCanvas();
  //how to make something that has multiple parts
  //casting a spell
  let p = createP("TEXT");
  p.mouseClicked(clicked);
}

function clicked() {
  transparency = transparency -.1;
  clicks++;
  p.style("opacity", transparency)
  console.log(clicks);
  if (transparency <= 0) {
    location.replace(index2.html)
  }

}
