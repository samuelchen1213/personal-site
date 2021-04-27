
// Color Palette
const TAU = Zdog.TAU;
const orange = 'orange';
const purple = '#2D2072';
const blue = '#115ADD';
const lblue = '#C2EDFF';
const limewhite = '#E9F3DB'

const distance = 12;

let isSpinning = true;

let illo = new Zdog.Illustration({
  // rotate: { x: -TAU/8 },
  element: '.zdog-canvas',
  dragRotate: true,
});

let dot = new Zdog.Shape({
  addTo: illo,
  translate: { y: -distance },
  stroke: 20,
  color: orange,
});
dot.copy({
  translate: { x: -distance },
  color: purple,
});
dot.copy({
  translate: { z: distance },
  color: blue,
});
dot.copy({
  translate: { x: distance },
  color: lblue,
});
dot.copy({
  translate: { z: -distance },
  color: limewhite,
});
dot.copy({
  translate: { y: distance },
});

let ring = new Zdog.Ellipse({
  addTo: illo,
  diameter: 200,
  stroke: 10,
  color: blue,
});
ring.copy({
  diameter: 200,
  rotate: { x: TAU/6 }
})
ring.copy({
  diameter: 200,
  rotate: { x: TAU/-6 }
})

function animate() {
  illo.rotate.y += isSpinning ? 0.06 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();