LAPU_PARTY.setRenderer((function() {

    const display = LAPU_PARTY.getDisplay();

    return{

        drawImage(image, x, y) {

            display.drawImage(image, 0, 0, image.width, image.height, Math.floor(x), Math.floor(y), image.width, image.height);

        }


    };

})());