/**
 * Copyright (c) 2019 Nadav Tasher
 * https://github.com/NadavTasher/PersonaTemplate/
 **/

function persona(animate = true) {
    if (animate) {
        let v = get("icons");
        for (let i = 0; i < v.children.length; i++) {
            slide(v.children[i], IN, i % 2 === 0, 1, i/2);
        }
    }
}