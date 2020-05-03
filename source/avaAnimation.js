(function () {
    const ava = $("img.avatar");

    $("img.avatar").mouseover((event)=>{
        console.log(event.target);
        $("img.avatar").addClass("shake");
    });

    $("img.avatar").mouseout((event)=>{
        console.log(event.target);
        $("img.avatar").removeClass("shake");
    });


})();