/*
COUNTER Instructions

Watch this short video carefully, paying attention to the UI and Chrome Devtools:
https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

A naive developer might say 3 different slices:
  - The count
  - Whether the text is color crimson or royalblue
  - Whether the text reads "even" or "odd"

But a single slice of state is all that's needed here: the count!
The other things can simply be _derived_ from the count itself.

STEP 0:
  Start by studying the component below, and importing the state hook.

STEP 1:
  Using the state hook, create a 'count', 'setCount' pair.
  The 'count' state should be initialized to the number zero.

STEP 2:
  The 'style' object has the 'color' property hard-coded to "royalblue".
  What the value of 'color' should be instead is a ternary expression that goes like this:
  If count is even, then "royalblue", else "crimson".

STEP 3:
  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.

STEP 4:
  This click handler needs to use 'setCount' to schedule the 'count' to become the current 'count' plus one.
  These state changes are not synchronous: the updated count arrives on the next run of the Counter component.
  Do NOT simply do count++. The plus plus is forbidden! We never mutate a slice of state in place. Even if you could
  reassign a const, React would not be aware anything changed. Always use the state updater, passing in a new value.

STEP 5:
  This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.

STEP 6:
  This click handler needs to use 'setCount' to set the 'count' to be zero again.
*/

// import React from 'react'; /* STEP 0 */

import React, { useState } from "react";
export default function Counter() {
  /* STEP 1 */
const [count,setCount] = useState(0);
  const increment = () => {
    /* STEP 4 */setCount(count + 1)
  };
  const decrement = () => {
    /* STEP 5 */setCount(count-1)
  };
  const reset = () => {
    /* STEP 6 */setCount(0)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count % 2 == 0 ? 'royalblue': "crimson"/* STEP 2 */
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count % 2 == 0 ? "even" : "odd"}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
// /*
// /*
// 💥💥💥 Rules of STATE 💥💥💥
//   - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
//   - A component may have as may slices of state as it needs
//   - An slice of state may contain a string, a number, a boolean, an array, an object...
//   - We use slices of state to store information that changes as the user interacts with the app
//   - State is used in the JSX interpolated inside curly brackets
//   - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
//   - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
// */

// import React, { useState } from "react";

// export default function Playground(props) {
//   // useState allows us to set internal state
//   // it is a function that takes desired initial state
//   // it returns an array with two things:
//   // 1. the state itself and
//   // 2. a state changer function
//   const [count, setCount] = useState(0); // destructuring
//   const [spinnerOn, setSpinnerOn] = useState(false);
//   const [weapon, setWeapon] = useState("scissors");

//   if (spinnerOn) {
//     return (
//       <div className="container">
//         Please wait...Loading
//         <button onClick={(event) => setSpinnerOn(false)}>
//           Turn Spinner Off
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <h3>Playground for Web {props.cohort}</h3>
//       <div>the count is {count}</div>

//       <div>the current weapon is {weapon}</div>
//       <button onClick={(event) => setWeapon("scissors")}>pick scissors</button>
//       <button onClick={(event) => setWeapon("rock")}>pick rock</button>
//       <button onClick={(event) => setWeapon("paper")}>pick paper</button>

//       <button onClick={(event) => setCount(count + 1)}>increase</button>
//     </div>
//   );
// }

// // const theArray = useState(0);
// // const count = theArray[0];
// // const setCount = theArray[1];

