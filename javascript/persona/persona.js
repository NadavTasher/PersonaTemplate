function persona(callback) {
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
}