let day = 8; //0 : 월요일 ~ 6: 일요일
let dayname;

switch(day){
    case 0:
        dayname = '월';
        break;
    case 1:
        dayname = '화';
        break;
    case 2:
        dayname = '수';
        break;
    case 3:
        dayname = '목';
        break;
    case 4:
        dayname = '금';
        break;
    case 5:
        dayname = '토';
        break;
    case 6:
        dayname = '일';
        break;
    default:
    dayname='없음';
}

console.log(dayname);
