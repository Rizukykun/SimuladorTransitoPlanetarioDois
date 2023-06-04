function loadVideo(){
    var video = document.getElementById("video");
    const queryString = window.location.search;;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('video')){
        const videoCode = urlParams.get('video');
        document.getElementById('source').src = "../../static/simulated/Sim" + videoCode + ".webm";
        video.pause();
        video.load();
        video.play();
    }
    else if (urlParams.has('sim')){
        const videoname = urlParams.get('sim');
        document.getElementById('source').src = "../../static/video/" + videoname;
        video.pause();
        video.load();
        video.play();
    }
}