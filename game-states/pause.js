LAPU_PARTY.states.pause = (function() {
    
    const { states,
    
      constructors:{ GameState },

      changeState

    } = LAPU_PARTY;

    const controller = LAPU_PARTY.getController();

    function activate()   {}      
    
    function deactivate() {}

    function render()     {}
    
    function update() {
        
        console.log('paused');

        if (controller.getP()) {
        
            controller.setP(false);

            changeState(states.run)
            
        }

}

   return new GameState(activate, deactivate, render, update);

})();