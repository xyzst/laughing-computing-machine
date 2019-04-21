The Complete Javascript Course
What Happens to JS Code?
Can be executed on multiple modalities (browser, node.js server)
Code executed through javascript engine
Multiple engines
(js core, google js renderer)
1 Parser code  
 will produce errrors, if any
2 Parser produces abstract syntax tree
3 Convert into machine code
4 Execute machine code
Excecution Contexts and Execution Stack
Execution Context
All JS code needs to run in environment of execution context
\*\*\*By default, all code not inside any function is executed in a GLOBAL context
eg, "window" object in the browser
A function call will introduce a new execution context to the stack
Execution Context (Detail)
Each context object contains
Variable Object (VO)
Scope chain
"this" variable
How created?
2 phases
creation phase
creation of variable object
argument object created containing all args passed into fx
code scanned for fx declarations, for each fx a property is created in the VO pointing to the fx
code scanned for variable declarations, for each variable a property is created in the VO and set to undefined
creation of scope chain
determine value of "this" variable
execution phase
code of function that generated current execution context ran line by line
