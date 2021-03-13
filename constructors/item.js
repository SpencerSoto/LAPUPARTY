LAPU_PARTY.constructors.Item = (function() {


    const { constructors:{Rectangle2D}} = LAPU_PARTY;

    const Item = function(x, y, width, height) {

      Rectangle2D.call(this, x, y, width, height);
        
    }

    Item.prototype = {


    };

    Object.assign(Item.prototype, Rectangle2D.prototype);

    return Item;

})();