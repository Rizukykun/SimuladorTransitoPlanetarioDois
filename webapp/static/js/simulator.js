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
        document.getElementById("opener").style.display = "none"
    }
    else if (urlParams.has('sim')){
        const videoname = urlParams.get('sim');
        document.getElementById('source').src = "../../static/video/" + videoname;
        video.pause();
        video.load();
        video.play();
    }
}

function dialogOpener(){
    if (confirm("Pressione OK se desejar abrir os arquivos localmente e retornar para o formulário.")) {
        window.location = "/open";
    }
}