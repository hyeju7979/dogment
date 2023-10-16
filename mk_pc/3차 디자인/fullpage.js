jQuery(document).ready(function(){    
    HcFullPage.init();
 });
 
 var HcFullPage = (function(){
     var init = function() {
         if(!action.isExist()) return;    
         action.fullpage();
     };
     
     var bind = function() {
         
     };
 
     var action = {
         isExist : function() {
             return jQuery('#fullpage').length > 0;
         },
         fullpage : function() {                  
             jQuery('#fullpage').fullpage({        
                 verticalCentered: true                
             });
         }
     }
     return {    
         init : init
     }
 
 })();