
/*
*

<div id= par>
   <div id = child>
       <h1></h1>
       <h2></h2>
    </div>

    <div id = child>
       <h1></h1>
       <h2></h2>
    </div>
</div>
 */
const parent=React.createElement("div",{id:"par"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"hello i fine"),React.createElement("h2",{},"hello i fine")
]),

React.createElement("div",{id:"child"},[React.createElement("h1",{},"hello i fine"),React.createElement("h2",{},"hello i fine")])
]);

const heading=React.createElement("h1",{ id:"heading"},"hello master react!");

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);