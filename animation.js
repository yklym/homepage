
// A little copy/past
try {
    $(".hover").ripples({
        resolution: 1080,
        perturbance: 0.01,
        interactive: true
    });
} catch (e) {
    $(".error")
        .show()
        .text(e);
}