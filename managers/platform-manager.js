LAPU_PARTY.managers.platform_manager = (function() {

    const Platform = LAPU_PARTY.constructors.Platform;

    return{

      active_platforms:[],

        createPlatform(x, y) {

         this.active_platforms.push(new Platform(x, y, 48, 4));
       }

    }


})() ;