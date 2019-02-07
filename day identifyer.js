// Week Day Identifyer

var getDayOfWeek = function(dayOfWeek, searchDay) {
var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

var ThatDay = (searchDay % 7) + (week.indexOf(dayOfWeek) - 1);

return week[ThatDay];
};