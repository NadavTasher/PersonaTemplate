/**
 * Copyright (c) 2019 Nadav Tasher
 * https://github.com/NadavTasher/PersonaTemplate/
 **/

function persona(animate = true) {
    if (animate) {
        let v = get("icons");
        v.style.opacity = "0";
        transition(document.body, IN, () => {
            v.style.opacity = "1";
            for (let i = 0; i < v.children.length; i++) {
                slide(v.children[i], IN, i % 2 === 0, 1, i / 2);
            }
        });
    }
}