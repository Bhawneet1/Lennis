
// Initialize Lenis
const lenis = new Lenis({
  // infinite:true,// loop mai ghoome ga
});

function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
