LAPU_PARTY.states.run = (function() {

    const display           = LAPU_PARTY.display;
    const output            = LAPU_PARTY.output;
    const controller        = LAPU_PARTY.controller;
    const engine            = LAPU_PARTY.engine;
    const states            = LAPU_PARTY.states;
    const item_manager      = LAPU_PARTY.managers.item_manager;
    const platform_manager  = LAPU_PARTY.managers.platform_manager;
    const GameState         = LAPU_PARTY.constructors.GameState;
    const Player            = LAPU_PARTY.constructors.Player;
    
    const world_width = 480;
    const world_height= 480;

    const gravity = 1;
    const friction = 0.9;

    const player = new Player(100, 100);

    const document_element = document.documentElement;

    var item_count = 0;
    
    const ground = {
        
        top:world_height - 32

    }

    function collideRectangleWithRectangle(rectangle1 ,rectangle2) {

      if (rectangle1.getLeft() > rectangle2.getRight() || rectangle1.getTop() > rectangle2.getBottom() || rectangle1.getRight() < rectangle2.getLeft() || rectangle1.getBottom() < rectangle2.getTop() ) return false;

      return true;
      
    }

    function collideTop(rectangle, top) {

      if (rectangle.getBottom() > top) { 
            
        rectangle.setBottom(top);

         return true;

       } return false;

    }

    function collidePlayerWithPlatform(player_, platform) {

      if (player_.getRight() < platform.getLeft() || player_.getLeft() > platform.getRight() || player_.getBottom() < platform.getTop() || player_.getOldBottom() > platform.getOldTop())  return false;

      player_.setBottom(platform.getTop());
          
      return true;

    }
    
    function update() {

        // Pause
        if (controller.getP()) {
            
          controller.setP(false);
          engine.setState(states.pause);

           return;
        }
        
        if (controller.getLeft()) player.moveLeft();
        if (controller.getRight()) player.moveRight();

        if (controller.getUp()) {

          player.jump();

        }

        player.updatePosition(gravity, friction);

        if (collideTop(player, ground.top)) player.ground();

        var platforms = platform_manager.active_platforms;
        
        for (var index = platforms.length - 1; index > -1; -- index) {

           var platform = platforms[index];

           platform.moveUp();

           if (platform.y < 32) platform.y = world_height;

           if (collidePlayerWithPlatform(player, platform)) player.ground(platform.velocity_y);

        }

        var items = item_manager.active_items;

        for (index = items.length - 1; index > -1; -- index) {

          var item = items[index];

          if (collideRectangleWithRectangle(item, player)) {

            item.setLeft(Math.random() * (world_width - item.width));
            item.setTop(Math.random() * (world_height - item.height - (world_height - ground.top)));

            item_count ++;

            output.innerText = item_count;

          };

        }    

    }

    function render() {
        
      display.fillStyle = '#303840';
      display.fillRect(0, 0, world_width, world_height);
    
      display.fillStyle = '#202830';
        
      display.fillRect(0, ground.top, world_width, 4);

      display.fillStyle = '#0090f0'

      var platforms = platform_manager.active_platforms;

      for (var index = platforms.length - 1; index > -1; -- index) {

        var platform = platforms[index];

        display.fillRect(platform.x, platform.y, platform.width, platform.height);

      }

      display.fillStyle = '#f09000' ;// item color

      var items = item_manager.active_items;

      for (index = items.length - 1; index > -1; -- index) {

        var item = items[index];

        
        display.beginPath();
        display.moveTo(item.getCenterX(), item.getTop() - 5);
        display.lineTo(item.getRight() + 5, item.getCenterY());
        display.lineTo(item.getCenterX(),item.getBottom() + 5);
        display.lineTo(item.getLeft() - 5,item.getCenterY());

        display.fill();

      }    
            
      display.fillStyle = player.color;
      display.fillRect(player.x, player.y, player.width, player.height);
            
    }

    item_manager.createItem(100, Math.random() * (world_height - 16 - (world_height - ground.top)));
    
    for (let x = world_width - 50; x > 0; x -= 50) {

      platform_manager.createPlatform(x, ground.top);

    }
    
    display.canvas.width = world_width;
    display.canvas.height= world_height;

    return new GameState(update, render);

})();