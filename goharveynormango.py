import datetime
import calendar
today = datetime.date.today()
nextday = today + datetime.timedelta(days=1)
printdate = calendar.day_name[nextday.weekday()]
print("Hurry! Sale must end this " + printdate + "!")