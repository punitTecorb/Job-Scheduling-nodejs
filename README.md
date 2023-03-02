## Job Scheduling 

## Introduction -:
    Job Scheduling using nodejs with TypeScript. Job Scheduling by using node-cron library.we are providing some demo
    method for scheduling job according to specific time. you can get demo code inside src/utils folder.

## Job Scheduling elements -:
    The cron expression is made up of 6 elements(* * * * * *), separated by a space.
    Here’s a quick reference to the cron expression, Indicating what each element represents.
      . First element for second (0 - 59) (optional)
      . Second element for minute (0 - 59)
      . Third element for hour (0 - 23)
      . Forth element for day of the month (1 - 31)
      . Fifth element for month (1 - 12)
      . Six element for day of the week (0 - 6) (0 and 7 both represent Sunday)

    We can replace each asterisk with one of the following characters so that the expression describes the time we want the job to be executed:

    *: An asterisk means “every interval”. For example, if the asterisk symbol is in the “month” field, it means the task is run every month.
    ,: The comma allows us to specify a list of values for repetition. For example, if we have 1, 3, 5 in the “month” field, the task will run in months 1, 3, and 5 (January, March, and May).
    -: The hyphen allows us to specify a range of values. If we have 1-5 in the “day of the week” field, the task will run every weekday (from Monday to Friday).
    /: The slash allows us to specify expressions like “every xth interval”. If we have */4 in the “hour” field, it means the action will be performed every 4 hours.

    

## Setup Steps:
### Install project dependency
`npm install`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`