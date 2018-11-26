(function(){
    var qryShowTime = document.querySelector('.showTime');
    var qrybtnStart = document.querySelector('.btnStart');
    var qrybtnReset = document.querySelector('.btnReset');
    var min = 1;
    var seg = 20;
    qryShowTime.innerHTML = min + "m" + seg + "s";
    
    qrybtnStart.addEventListener('click', function() {
    var cronometro = setInterval(() => {
        document.querySelector('.showTime').innerHTML = min + "m" + seg + "s";
        qrybtnReset.addEventListener('click', function() {
            min = 1;
            seg = 20;
            document.querySelector('.showTime').innerHTML = min + "m" + seg + "s";
            clearInterval(cronometro);
            min = 1;
            seg = 20;
        }); 
        seg--;
        if(seg == 0 && min != 0){
            qrybtnReset.addEventListener('click', function() {
                min = 1;
                seg = 20;
                document.querySelector('.showTime').innerHTML = min + "m" + seg + "s";
                clearInterval(cronometro);
                min = 1;
                seg = 20;
    
            }); 
            seg = 60;
            min--;
        }
        if(seg == 0 && min == 0){
            document.querySelector('.showTime').innerHTML = min + "m" + seg + "s";
            clearInterval(cronometro);
        }
    }, 1000);
    });

})();