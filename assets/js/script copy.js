(function(window,document,$){
    $(function(){
        // 'use strict';

        // Open and close sidebar
        function openNav() {
            document.getElementById("mySidebar").style.width = "60%";
            document.getElementById("mySidebar").style.display = "block";
        };
        
        function closeNav() {
            document.getElementById("mySidebar").style.display = "none";
        };
    }); //_______end load
}(window,document,jQuery));