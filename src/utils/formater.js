

export class DateFormator{

    today(date){
        let difference = new Date() - date;
        let current = Math.floor(difference / 3600000)
        if(current < 24){
            return  true;
        }
        return  false;
    }
    previousDay(date){
        let difference = new Date() - date;
        let prevDay = Math.floor(difference / 3600000);
        if (prevDay > 24){
            return true
        }
        return false;
    } 

    weekly(date){
        let difference = new Date() - date;
        let week = Math.floor(difference / 604800000);
        if (1 <= week && week <= 4){
            return true;
        }
        return false;
    } 
    
    monthly(date){
        let difference = new Date() - date;
        let month = Math.floor(difference / 2419200000)
        if(month >= 1 && month <= 12) {
            return true;
        }
        return false;
    }

    quaterly(date){
        let difference = new Date() - date;
        let quater = Math.floor(difference / 7257600000);
        if (quater >= 1 && quater <= 3) {
            return true;
        }
        return false
    }

    yearly(date){
        let difference = new Date() - date;
        let year = Math.floor(difference / 29030400000);
        if(year >= 1){
            return true;
        }
        return false;
    }

    formateDate(date) {
        let newDate = new Date(date);
        return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    }

}