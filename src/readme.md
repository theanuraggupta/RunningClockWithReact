Your task is to implement a React component that renders a running-clock that will count down time until it reaches 0 minutes and 0 seconds (00:00).

Requirements
Functionality
Given the HTML structure:

<label>
    <input type="number">
    Minutes
</label>
<label>
    <input type="number">
    Seconds
</label>

<button>START</button>
<button>PAUSE / RESUME</button>
<button>RESET</button>

<h1 data-testid="running-clock">00:00</h1>
implement a running-clock that receives its time value from user inputs and allows the user to start, pause/resume the countdown and reset the clock.

In order to satisfy the task's requirements, you need to implement the following:

Time display:

time is displayed in <h1 data-testid="running-clock"> and its initial value is 00:00;
time is displayed in mm:ss format;
1 minute, 5 seconds should be displayed as: 01:05;
1 minute, 65 seconds should be displayed as: 02:05.
Inputs:

changing input values does not change the value displayed in <h1 data-testid="running-clock">;
inputs do not need to have max or min attributes;
the clock doesn't need to handle negative values; this is not a part of the solution and will not be evaluated.
Behavior:

On a START button click, set the clock value displayed in <h1 data-testid="running-clock"> with the time calculated from the inputs and start counting down;
Once the clock is running, update the displayed time every second;
Once the clock is running and the START button is clicked, restart the clock with the same time originally provided in the inputs;
Once the countdown is done and the clock reaches 00:00, stop counting and keep displaying 00:00;
On a PAUSE / RESUME button click, pause or resume the clock appropriately:
PAUSE puts the countdown on hold;
RESUME resumes the countdown from where it left off;
Once the RESET button is clicked, both inputs should be reset to 0;
Once the RESET button is clicked, the time displayed in <h1 data-testid="running-clock"> should be reset to 00:00.
Implementation hints & notice:
Do not clear the inputs on a START button click.
Use the same button element for both pause and resume actions.
The following elements are used in tests and therefore must not be changed:
<input> labels;
<button> texts;

<h1>element data-testid attribute value.
Hints
Only imports from the react module are allowed.
Your solution will be evaluated based on its correctness.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.
The Preview tab will display your component. You can use it for testing purposes.
You can use console.log and console.error for debugging purposes via your browser's developer tools.
