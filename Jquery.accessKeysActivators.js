(function ( $ ) {

    // Requires https://github.com/bestiejs/platform.js/blob/master/platform.js
    // Uses info https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey 

	class KMPlatform{
      constructor(p){this.platform = p}
    	getAccessKeyActivators(){}
    }
    
    class KMLinux extends KMPlatform{
    	getAccessKeyActivators(){
      	if(platform.name == 'Chrome' || platform.name == 'Firefox')
        	return ['alt','shift'];
        if(platform.name.startsWith('Opera'))
        	return ['alt'];
        return [];
      }
    }
    
    class KMMac extends KMPlatform{
    	getAccessKeyActivators(){
      	if(platform.name == 'Chrome' || platform.name == 'Firefox' || platform.name.startsWith('Opera'))
        	return ['ctrl','alt'];
        return [];
      }
    }
    
    class KMWindows extends KMPlatform{
    	getAccessKeyActivators(){
      	if(platform.name == 'Chrome' || platform.name == 'Firefox')
        	return ['alt','shift'];
        if(platform.name == 'IE' || platform.name.startsWith('Opera'))
        	return ['alt'];
        return [];
      }
    }

    $.extend({
       getAccessKeyActivators: function(){
           if(platform.os.family == 'Linux')
                return (new KMLinux(platform)).getAccessKeyActivators();
            else if (platform.os.family.startsWith('Mac'))
                return (new KMMac(platform)).getAccessKeyActivators();
            else if (platform.os.family.startsWith('Windows'))
                return (new KMWindows(platform)).getAccessKeyActivators();
            else return [];
       }
    });
}( jQuery ));