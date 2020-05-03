(function () {
    const ava = $("img.avatar");

    $("img.avatar").mouseover((event)=>{
        $("img.avatar").addClass("shake");
    });

    $("img.avatar").mouseout((event)=>{
        $("img.avatar").removeClass("shake");
    });


})();