
// A little copy/past. Don't need enclosuring as there are no vars
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
