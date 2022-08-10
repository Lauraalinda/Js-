// var hopperLab = {
    // name: "bar",
    // func: function() {
        // var self = this;
        // console.log("outer func:  this.name = " + this.name);
        // console.log("outer func:  self.name = " + self.name);
        // (function() {
            // console.log("inner func:  this.name = " + this.name);
            // console.log("inner func:  self.name = " + self.name);
        // }());
    // }
// };
// hopperLab.func();

// Q3) What will the code below output to the console and why? 
// Q4) How has this identifier been used?
// 
// ANSWERS
// Q3) The code above will output this
// outer func:  this.name = bar
// outer func:  self.name = bar
// inner func:  this.name = undefined
// inner func:  self.name = bar
// 
// because the hopper lab object which holds an attribute called func that contains a function.Th
// attribute has been called using the object name followed by its name hence executing its 
// function output.
// 
// Q4)The identifier has been used to access the attribute name within the object using "this" 
// since the attribute func is still within the same object.