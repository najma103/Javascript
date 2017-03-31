/*7. **AlarmClock** Write a function that given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat,
		and a boolean indicating if we are on vacation, displays the weeday name, 
		and the time in the form of "7:00" indicating when the alarm clock should ring.
		Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
		Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".*/

		alarmClock(1, false) → "Monday 7:00"
		alarmClock(5, true) → "Frday 10:00"
		alarmClock(0, false) → "Sunday 10:00"