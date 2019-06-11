/*
Created By NadavTasher
https://github.com/NadavTasher/WebAppBase/
*/

function persona(animate = true) {
    if (animate) {
        let v = get("icons");
        for (let i = 0; i < v.children.length; i++) {
            slide(v.children[i], true, i % 2 === 0);
        }
    }
}