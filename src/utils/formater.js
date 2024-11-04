export class DateFormator{

    today(date){
        let difference = new Date() - date;

        let current = Math.floor(difference / 3600000)
        console.log(current);
        if(current < 24){
            return  true;
        }
        return  false;
    }
    previousDay(){
        let prevDay = Math.floor(this.difference / 3600000);
        if (prevDay > 24){
            return true
        }
        return false;
    } 

    weekly(){
        let week = Math.floor(this.difference / 604800000);
        if (1 <= week && week <= 4){
            return true;
        }
        return false;
    } 
    
    monthly(){
        let month = Math.floor(this.difference / 2419200000)
        if(month > 1) {
            return true;
        }
        return false;
    }

    currentDate(date) {
        let newDate = new Date(date);
        return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    }
}