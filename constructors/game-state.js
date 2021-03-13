LAPU_PARTY.constructors.GameState = (function() {
    
    const GameState = function(activate, deactivate, render, update) {
        
        this.activate   = activate;
        this.deactivate = deactivate;
        this.update     = update;
        this.render     = render;

    };

    GameState.prototype = {};

    return GameState;

})();