LAPU_PARTY.states.pause = (function(controller, engine, states, GameState) {
    
    function update() {
        
        console.log('paused');

        if (controller.getP()) {
        
            controller.setP(false);
            engine.setState(states.run);

            return;
        }

}


   function render() {}

    return new GameState(update, render);

})(LAPU_PARTY.controller, LAPU_PARTY.engine, LAPU_PARTY.states , LAPU_PARTY.constructors.GameState);