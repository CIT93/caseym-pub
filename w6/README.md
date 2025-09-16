"Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output"
Description:
This project is a simple web application that helps me decide whether I should play a game or do my homework. In this first step, the app includes a form where I can enter how much homework I have, what day it is, whether I have time to play, and if any homework is due today. Based on that information, the app gives a basic suggestion.
The main goal of this step is to create the user interface, capture input values, and show a message with the decision result. The app uses a modular code structure to keep everything organized and easy to update later.

My Decision Focus:
This app is designed to help me decide if I should play video games or focus on doing homework. It helps me think about my workload, the day of the week, how much time I have, and whether anything is due today. This helps me make smarter decisions about how I spend my time.

Decision Logic:
Small Helper Functions:
1. isTooBusy(hasTime, dueToday)
When you don’t have time to play
Or you have homework due today
Then the program says:
“You should do your homework. Handle responsibilities first!”

2. hasHeavyWorkload(assignmentsDue)
When you have more than 3 homework assignments due
Then the program says:
“You have a heavy workload. Better do your homework first.”

3. isWeekendWithLightWorkload(day, assignmentsDue)
When it is Saturday or Sunday
And you have 2 or fewer assignments due
Then the program says:
“It’s the weekend and your workload is light — go ahead and play the game!”

4. isFridayWithLightWorkload(day, assignmentsDue)
When it is Friday
And you have 1 or fewer assignments due
Then the program says:
“It’s Friday and you only have one assignment — enjoy some game time!”

Final Decision:
If none of the above rules fit, the program says:
“You probably should do your homework. Finish it so you can game stress-free!”
This is the default message when the program is not sure what to say.

How the program works:
The main function checks each rule in order:
Are you too busy or have homework due today?
Do you have many assignments due?
Is it the weekend and you don’t have much homework?
Is it Friday and your homework load is light?
If none of these are true, show the default advice.
Each helper function checks one part, so the program is easy to read and change.

Input Types Used:
The form uses the following input types:
Radio buttons for the question “Do you have time to play the game right now?”
This helps check if I even have time available to consider gaming.
Number input for “How many assignments are due this week?”
This lets me enter how much work I have to do.
Dropdown menu for “What day is it?”
The day can affect the suggestion (for example, weekends may be more relaxed).
Radio buttons for “Are any of the assignments due today?”
If something is due today, that adds urgency to get it done first.
These inputs were chosen because they relate to my typical decision-making process when I’m thinking about whether I should relax or get schoolwork done.

Color Palette
The app uses a simple dark theme with a few accent colors:
Background color: Black (#000000)
Main text color: Bright green (#00b318)
Headings: Green (#00b318)
Form elements (like buttons): Green background with white text
Results area background: Light blue (#e6f7ff)
This color palette helps keep the screen easy to read. The dark background with green text feels calm but focused, and the light blue result area makes the final decision easy to see.

Example Outputs:
Here are some examples to show how the program works. For each one, I say what the input is and what the program says.

Example 1:
Input:
Have time? No
Assignments to do: 2
Day: Monday
Is homework due today? No
Output:
You should do your homework. Handle responsibilities first!

Example 2:
Input:
Have time? Yes
Assignments to do: 4
Day: Wednesday
Is homework due today? No
Output:
You have a heavy workload. Better do your homework first.

Example 3:
Input:
Have time? Yes
Assignments to do: 1
Day: Saturday
Is homework due today? No
Output:
It’s the weekend and your workload is light — go ahead and play the game!

Example 4 (Default answer):
Input:
Have time? Yes
Assignments to do: 2
Day: Tuesday
Is homework due today? No
Output:
You probably should do your homework. Finish it so you can game stress-free!