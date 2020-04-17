"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exports.__esModule = true;
var state;
(function (state) {
    state[state["waitingForPA"] = 1] = "waitingForPA";
    state[state["AssignToSME"] = 2] = "AssignToSME";
    state[state["ResponseCompleted"] = 3] = "ResponseCompleted"; // 3
})(state || (state = {}));
console.log(state[2]);
