const LAPU_PARTY = {

    constructors:{},
    managers:{},
    states:{},

    display:document.createElement('canvas').getContext('2d', { alpha:false }),
    output:document.createElement('p'),

    resize:function(event) {

        const output = LAPU_PARTY.output;
        const rectangle = LAPU_PARTY.display.canvas.getBoundingClientRect();

        output.style.top = rectangle.top + 'px';
        output.style.left = rectangle.left + 'px';


    }

};

LAPU_PARTY.initialize = function() {

   this.controller.activate();

   document.body.appendChild(this.display.canvas);

   document.body.appendChild(this.output);

   this.output.innerText = "LAPU LOAD OUT!"

   this.engine.setState(this.states.run);
   this.engine.start();

   this.resize();

   window.addEventListener('resize', this.resize);

};