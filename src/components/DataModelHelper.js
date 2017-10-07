export function isOnVacation(attr = {
	nowTime: 0,
	user: {
		vacationStartTime: () => { return null }, // arrow function/method definition (closure)
		vacationEndTime: () => { return null }, // arrow function/method definition (closure)
	}
})

{
	var startTime = attr.user.vacationStartTime()
	var endTime = attr.user.vacationEndTime()

	var wasOnVacation = startTime !== 0 && startTime <= attr.nowTime
	var stillOnVacation = endTime === 0 || endTime >= attr.nowTime

	return wasOnVacation && stillOnVacation
}

