function persona(callback = undefined, animate = true) {
    if (animate) {
        let v = get("icons");
        for (let i = 0; i < v.children.length; i++) {
            slide(v.children[i], true, i % 2 === 0);
        }
    }
    if (callback !== undefined) callback();
}