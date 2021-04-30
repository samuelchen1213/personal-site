
// Color Palette
const TAU = Zdog.TAU;
const orange = '#EE964B';
const blue = '#0d43da';
const distance = 12;

let isSpinning = true;

const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
  rotate: { y: -TAU/8 ,x:TAU/20}
});

// Space stuff
let hole = new Zdog.Shape({
  addTo: illo,
  color: "black",
  stroke: 90,
})

let ring = new Zdog.Ellipse({
  addTo: hole,
  color: "black",
  stroke: 5,
  diameter: 130,
  rotate: {y: TAU/8}
})
ring.copy({
  diameter: 160,
  rotate: {y: TAU/3, x: -TAU/8}
})
ring.copy({
  diameter: 190,
  rotate: {x: -TAU/3}
})

let particle = new Zdog.Shape({
  addTo: hole,
  color: 'white',
  stroke: 10,
  translate: {x: -160},
})

particle.copy({
  translate: {y: -220, z: 85},
})
particle.copy({
  translate: {y: 135, z: -35, x: 120},
})
particle.copy({
  translate: {y: 240, x: -100},
})
particle.copy({
  translate: {z: -120, y: 150},
})

// Astronaut
let body = new Zdog.RoundedRect({
  addTo: hole,
  width: 12,
  height: 19,
  color: 'white',
  fill: true,
  cornerRadius: 1,
  stroke: 16,
  translate: {z: -140, y: -200},
  rotate: {x: TAU/-5}
});

let backpack = new Zdog.RoundedRect({
  addTo: body,
  width: 25,
  height: 45,
  color: "orange",
  fill: true,
  cornerRadius: 4,
  stroke: 15,
  translate: { z: -16, y: -5 },
});

let neck = new Zdog.Ellipse({
  addTo: body,
  diameter: 10,
  stroke: 5,
  fill: true,
  color: blue,
  translate: {y: -15, z: 3},
  rotate: {x: TAU/5}
});

let head = new Zdog.Shape({
  addTo: body,
  stroke: 25,
  color: "white",
  translate: {y: -28, z: 7}
});

let visor = new Zdog.RoundedRect({
  addTo: head,
  height: 10,
  width: 17,
  stroke: 2,
  fill: true,
  color: "black",
  translate: {z: 13},
  rotate: {x: 380},
  cornerRadius: 4,
});

let arm = new Zdog.Shape({
  addTo: body,
  stroke: 15,
  fill: true,
  color: "white",
  translate: {x: -12, y: -9, z: 3},
});

let upperarm = new Zdog.Shape({
  addTo: arm,
  stroke: 12,
  path: [
    { x: 0, y: 0, z: 0 }, 
    { x: -8, y: -3, z: 5}, 
  ],
  color: "white",
});

let elbow = new Zdog.Ellipse({
  addTo: upperarm,
  diameter: 7,
  stroke: 4,
  fill: true,
  color: blue,
  translate: {x: -11 ,y: -4, z: 9},
  rotate: {y: TAU/10,}
});

let lowerarm = new Zdog.Shape({
  addTo: elbow,
  stroke: 10,
  path: [
    { x: -1, y: 0, z: 4 }, 
    { x: 0, y: -2, z: 20}, 
  ],
  color: "white",
});

let hand = new Zdog.Ellipse({
  addTo: lowerarm,
  diameter: 10,
  stroke: 5,
  fill: true,
  color: "white",
  translate: {x: 0, y: -2, z: 25},
  rotate: {x: TAU/4}
});

arm.copyGraph({
  translate: {x: 12, y: -8, z: 3},
  rotate: {y: TAU/2, x: 380}
});

let hip = new Zdog.RoundedRect({
  addTo: body,
  height: 9,
  width: 25,
  stroke: 5,
  fill: true,
  color: blue,
  cornerRadius: 4,
  translate: {y: 17, z: 5},
  rotate: {x: TAU/3}
})

let lowerhip = new Zdog.RoundedRect({
  addTo: hip,
  height: 9,
  width: 25,
  stroke: 5,
  fill: true,
  color: "white",
  cornerRadius: 4,
  translate: {z: -5},
})

let leg = new Zdog.Shape({
  addTo: lowerhip,
  stroke: 16,
  path: [
    { x: -7, y: 0, z: -5 }, 
    { x: -10, y: 10, z: -6}, 
  ],
  color: "white",
})

let calf = new Zdog.Shape({
  addTo: leg,
  stroke: 14,
  path: [
    { x: -10, y: 10, z: -6 }, 
    { x: -20, y: 15, z: -28}, 
  ],
  color: "white"                  
});

let foot = new Zdog.RoundedRect({
  addTo: calf,
  height: 15,
  width: 9,
  stroke: 8,
  fill: true,
  color: "white",
  cornerRadius: 4,
  translate: {x: -23, y: 20, z: -35},
  rotate: {y: TAU/10, x: TAU/2}
})

let leg2 = new Zdog.Shape({
  addTo: lowerhip,
  stroke: 16,
  path: [
    { x: 7, y: 0, z: -5 }, 
    { x: 10, y: 10, z: -6}, 
  ],
  color: "white",
})

let calf2 = new Zdog.Shape({
  addTo: leg2,
  stroke: 14,
  path: [
    { x: 10, y: 10, z: -6 }, 
    { x: 20, y: 15, z: -28}, 
  ],
  color: "white"                  
});

let foot2 = new Zdog.RoundedRect({
  addTo: calf2,
  height: 15,
  width: 9,
  stroke: 8,
  fill: true,
  color: "white",
  cornerRadius: 4,
  translate: {x: 23, y: 20, z: -35},
  rotate: {y: TAU/10}
})

// Machine thing

let machine = new Zdog.Box({
  addTo: hole,
  width: 30,
  height: 20,
  depth: 20,
  stroke: false,
  color: '#C25', 
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: '#ED0',
  bottomFace: '#636',
  translate: {y: -150, z: 80, x: -100},
  rotate: {x: TAU/8, y: TAU/8}
})

let knob = new Zdog.Ellipse({
  addTo: machine,
  color: "white",
  stroke: 2,
  diameter: 10,
  fill: true,
  translate: {z: 11}
})

let antenna = new Zdog.Shape({
  addTo: machine,
  stroke: 2,
  path: [
    { x: -5, y: -10, z: 0 }, 
    { x: -15, y: -30, z: 0}, 
  ],
  color: "#ED0",
})

antenna.copy({
  rotate: {y: TAU/2}
})

// Laptop
let laptop = new Zdog.Box({
  addTo: hole,
  width: 40,
  height: 35,
  depth: 2,
  stroke: false,
  color: 'white',
  leftFace: '#C0C0C0',
  rightFace: '#C0C0C0',
  topFace: '#C0C0C0',
  bottomFace: '#C0C0C0',
  rearFace:'#C0C0C0',
  translate: {y: 160, x: 100, z: 80},
  rotate: {x: TAU/8, y: -TAU/8}
})

let rim = new Zdog.Rect({
  addTo: laptop,
  width: 40,
  height: 34,
  stroke: 2,
  color: "black",
  translate: {z: 2}
})

let logo = new Zdog.Ellipse({
  addTo: laptop,
  diameter: 7,
  color: 'white',
  fill: true,
  translate: {z: -2}
})

let leaf = new Zdog.Ellipse({
  addTo: logo,
  width: 1,
  height: 3,
  stroke: 1,
  fill: true,
  color: '#white',
  translate: {x: -1,y: -5},
  rotate: {z: -TAU/8}
});

let keyboard = new Zdog.Box({
  addTo: laptop,
  width: 40,
  height: 35,
  depth: 2,
  stroke: false,
  color: '#C0C0C0',
  rotate: {x: -TAU/3},
  translate: {y: 26, z: 15}
});

function animate() {
  illo.rotate.y += isSpinning ? 0.005 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();