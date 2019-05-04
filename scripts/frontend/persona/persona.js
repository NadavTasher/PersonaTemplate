function persona(callback, animate = true) {
    if (animate) {
        hide("title");
        hide("description");
        hide("custom");
        hide("icons");
        // Start animations
        show("title");
        slide("title", false, () => {
            show("description");
            slide("description", true, () => {
                show("custom");
                slide("custom", false, () => {
                    show("icons");
                    slide("icons", true, () => {
                        callback();
                    });
                });
            });
        });
    } else {
        callback();
    }
}