class Utilities{
    static addMinutes(time, minsToAdd) {
        function D(J){ 
            return (J<10? '0':'') + J;
        };
        var piece = time.split(':');
        var mins = piece[0]*60 + +piece[1] + +minsToAdd;
        return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
    }

   static calculateHours(startHour, endHour) {
        function D(J){ 
            return (J<10? '0':'') + J;
        };
        var startPiece = startHour.split(':');
        var startMins = startPiece[0]*60 + +startPiece[1];

        var endPiece = endHour.split(':');
        var endMins = endPiece[0]*60 + +endPiece[1];

        var totalMins = endMins - startMins;

        return D(totalMins%(24*60)/60 | 0) + ':' + D(totalMins%60);  
   } 

    static hourToMinutes(hour){
        var piece = hour.split(':');
         var mins = piece[0]*60 + +piece[1];
         return mins;
    }

    static minutesToHour(minutes){
         function D(J){ 
             return (J<10? '0':'') + J;
         };
         return D(minutes/60 | 0) + ':' + D(minutes%60);  
    }
}