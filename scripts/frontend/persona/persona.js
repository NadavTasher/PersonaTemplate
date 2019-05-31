function persona(callback = undefined, animate = true) {
    if (animate) {
        let v = get("icons");
        for (let i = 0; i < v.children.length; i++) {
            slideIn(v.children[i], i % 2 === 0);
        }
    }
    if (callback !== undefined) callback();
}