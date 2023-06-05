function test1() {
    var mensagem = 'Simulação 1 - Simulação de Estrela Vermelha com Planeta.\nPressione OK para carregar o Vídeo.'
    if (!videoDialogOpener(mensagem)) {
        window.location.replace("/simulator?video=1")
        return;
    }

    if (!dataDialogOpener()) {
        field_remover()

        document.getElementById("starName").value = "Star1"
        document.getElementById("starRadius").value = "373."
        document.getElementById("starMass").value = "10"
        document.getElementById("effectiveTemperature").value = "10"


        document.getElementById("planetName").value = "Planet1"
        document.getElementById("planetRadius").value = "0.066200003"
        document.getElementById("planetMass").value = "10000"
        document.getElementById("atmosphere").value = "10"
        document.getElementById("planetAlbedo").value = "10"

        document.getElementById("planetSemiaxis").value = "19.549999"
        document.getElementById("planetPeriod").value = "9.4341497"
        document.getElementById("planetInclinationAngle").value = "90"
        document.getElementById("planetObliquityAngle").value = "0"
        document.getElementById("planetEccentricity").value = "0"
        document.getElementById("nenhum").checked = true
    }
}

function test2() {
    var mensagem = 'Simulação 2 - Simulação de Estrela Amarela com Planeta e Lua.\nPressione OK para carregar o Vídeo.'
    if (!videoDialogOpener(mensagem)) {
        window.location.replace("/simulator?video=2")
        return;
    }

    if (!dataDialogOpener()) {
        field_remover()

        document.getElementById("starName").value = "Star2";
        document.getElementById("starRadius").value = "373.";
        document.getElementById("starMass").value = "10";
        document.getElementById("effectiveTemperature").value = "10";

        var val = "copper";
        var sel = document.getElementById('starColor');
        var opts = sel.options;

        for (var opt, j = 0; opt = opts[j]; j++) {
            if (opt.value == val) {
                sel.selectedIndex = j;
                break;
            }
        }


        document.getElementById("planetName").value = "Planet2"
        document.getElementById("planetRadius").value = "0.066200003"
        document.getElementById("planetMass").value = "10000"
        document.getElementById("atmosphere").value = "10"
        document.getElementById("planetAlbedo").value = "10"

        document.getElementById("planetSemiaxis").value = "19.549999"
        document.getElementById("planetPeriod").value = "9.4341497"
        document.getElementById("planetInclinationAngle").value = "90"
        document.getElementById("planetObliquityAngle").value = "0"
        document.getElementById("planetEccentricity").value = "0"

        create_moons()

        document.getElementById("moonName_1").value = "Moon1"
        document.getElementById("moonRadius_1").value = "0.0288431223213"
        document.getElementById("moonMass_1").value = "10000"
        document.getElementById("moonAlbedo_1").value = "0"
        document.getElementById("moonDistance_1").value = "4.10784266075"
        document.getElementById("moonSemiaxis_1").value = "0"
        document.getElementById("moonPeriod_1").value = "0.0751017821823"
        document.getElementById("moonInclinationAngle_1").value = "90"
        document.getElementById("moonObliquityAngle_1").value = "0"
        document.getElementById("moonEccentricity_1").value = "0"
        document.getElementById("nenhum").checked = true
    }


}

function test3() {
    var mensagem = 'Simulação 3 - Simulação de Estrela Azul com Duas Manchas e Planeta com Duas Luas.\nPressione OK para carregar o Vídeo.'

    if (!videoDialogOpener(mensagem)) {
        window.location.replace("/simulator?video=3")
        return;
    }

    if (!dataDialogOpener()) {
        field_remover()

        document.getElementById("starName").value = "Star2";
        document.getElementById("starRadius").value = "373.";
        document.getElementById("starMass").value = "10";
        document.getElementById("effectiveTemperature").value = "10";

        var val = "bone";
        var sel = document.getElementById('starColor');
        var opts = sel.options;

        for (var opt, j = 0; opt = opts[j]; j++) {
            if (opt.value == val) {
                sel.selectedIndex = j;
                break;
            }
        }


        document.getElementById("planetName").value = "Planet2"
        document.getElementById("planetRadius").value = "0.066200003"
        document.getElementById("planetMass").value = "10000"
        document.getElementById("atmosphere").value = "10"
        document.getElementById("planetAlbedo").value = "10"

        create_spots()

        document.getElementById("spotRadius_1").value = "0.05"
        document.getElementById("spotIntensity_1").value = "0.5"
        document.getElementById("spotLatitude_1").value = "-30"
        document.getElementById("spotLongitude_1").value = "-55"

        create_spots()

        document.getElementById("spotRadius_2").value = "0.05"
        document.getElementById("spotIntensity_2").value = "0.9"
        document.getElementById("spotLatitude_2").value = "-45"
        document.getElementById("spotLongitude_2").value = "45"

        document.getElementById("planetSemiaxis").value = "19.549999"
        document.getElementById("planetPeriod").value = "9.4341497"
        document.getElementById("planetInclinationAngle").value = "90"
        document.getElementById("planetObliquityAngle").value = "0"
        document.getElementById("planetEccentricity").value = "0"

        create_moons()

        document.getElementById("moonName_1").value = "Moon1"
        document.getElementById("moonRadius_1").value = "0.0288431223213"
        document.getElementById("moonMass_1").value = "10000"
        document.getElementById("moonAlbedo_1").value = "0"
        document.getElementById("moonDistance_1").value = "4.10784266075"
        document.getElementById("moonSemiaxis_1").value = "0"
        document.getElementById("moonPeriod_1").value = "0.0751017821823"
        document.getElementById("moonInclinationAngle_1").value = "90"
        document.getElementById("moonObliquityAngle_1").value = "0"
        document.getElementById("moonEccentricity_1").value = "0"

        create_moons()

        document.getElementById("moonName_2").value = "Moon2"
        document.getElementById("moonRadius_2").value = "0.0298431223213"
        document.getElementById("moonMass_2").value = "10000"
        document.getElementById("moonAlbedo_2").value = "0"
        document.getElementById("moonDistance_2").value = "4.10784266075"
        document.getElementById("moonSemiaxis_2").value = "0"
        document.getElementById("moonPeriod_2").value = "0.751017821823"
        document.getElementById("moonInclinationAngle_2").value = "75"
        document.getElementById("moonObliquityAngle_2").value = "0"
        document.getElementById("moonEccentricity_2").value = "0"
        document.getElementById("nenhum").checked = true
    }

}

function test4(){
    var mensagem = 'Simulação 4 - Simulação de Estrela Amarela com Planeta e Lua e Interferência Média de Fog.\nPressione OK para carregar o Vídeo.'
    if (!videoDialogOpener(mensagem)) {
        window.location.replace("/simulator?video=4")
        return;
    }

    if (!dataDialogOpener()) {
        field_remover()

        document.getElementById("starName").value = "Star2";
        document.getElementById("starRadius").value = "373.";
        document.getElementById("starMass").value = "10";
        document.getElementById("effectiveTemperature").value = "10";

        var val = "copper";
        var sel = document.getElementById('starColor');
        var opts = sel.options;

        for (var opt, j = 0; opt = opts[j]; j++) {
            if (opt.value == val) {
                sel.selectedIndex = j;
                break;
            }
        }


        document.getElementById("planetName").value = "Planet2"
        document.getElementById("planetRadius").value = "0.066200003"
        document.getElementById("planetMass").value = "10000"
        document.getElementById("atmosphere").value = "10"
        document.getElementById("planetAlbedo").value = "10"

        document.getElementById("planetSemiaxis").value = "19.549999"
        document.getElementById("planetPeriod").value = "9.4341497"
        document.getElementById("planetInclinationAngle").value = "90"
        document.getElementById("planetObliquityAngle").value = "0"
        document.getElementById("planetEccentricity").value = "0"

        create_moons()

        document.getElementById("moonName_1").value = "Moon1"
        document.getElementById("moonRadius_1").value = "0.0288431223213"
        document.getElementById("moonMass_1").value = "10000"
        document.getElementById("moonAlbedo_1").value = "0"
        document.getElementById("moonDistance_1").value = "4.10784266075"
        document.getElementById("moonSemiaxis_1").value = "0"
        document.getElementById("moonPeriod_1").value = "0.0751017821823"
        document.getElementById("moonInclinationAngle_1").value = "90"
        document.getElementById("moonObliquityAngle_1").value = "0"
        document.getElementById("moonEccentricity_1").value = "0"

        noisetype('FOG')

        document.getElementById("Fog").checked = true
        document.getElementById("noisy").checked = true
    }
}

function test5() {
    var mensagem = 'Simulação 5 - Simulação de Estrela Azul com Duas Manchas e Planeta com Duas Luas e CME.\nPressione OK para carregar o Vídeo.'

    if (!videoDialogOpener(mensagem)) {
        window.location.replace("/simulator?video=5")
        return;
    }

    if (!dataDialogOpener()) {
        field_remover()

        document.getElementById("starName").value = "Star2";
        document.getElementById("starRadius").value = "373.";
        document.getElementById("starMass").value = "10";
        document.getElementById("effectiveTemperature").value = "10";

        var val = "bone";
        var sel = document.getElementById('starColor');
        var opts = sel.options;

        for (var opt, j = 0; opt = opts[j]; j++) {
            if (opt.value == val) {
                sel.selectedIndex = j;
                break;
            }
        }


        document.getElementById("planetName").value = "Planet2"
        document.getElementById("planetRadius").value = "0.066200003"
        document.getElementById("planetMass").value = "10000"
        document.getElementById("atmosphere").value = "10"
        document.getElementById("planetAlbedo").value = "10"

        create_spots()

        document.getElementById("spotRadius_1").value = "0.05"
        document.getElementById("spotIntensity_1").value = "0.5"
        document.getElementById("spotLatitude_1").value = "-30"
        document.getElementById("spotLongitude_1").value = "-55"

        create_spots()

        document.getElementById("spotRadius_2").value = "0.05"
        document.getElementById("spotIntensity_2").value = "0.9"
        document.getElementById("spotLatitude_2").value = "-45"
        document.getElementById("spotLongitude_2").value = "45"

        document.getElementById("planetSemiaxis").value = "19.549999"
        document.getElementById("planetPeriod").value = "9.4341497"
        document.getElementById("planetInclinationAngle").value = "90"
        document.getElementById("planetObliquityAngle").value = "0"
        document.getElementById("planetEccentricity").value = "0"

        create_moons()

        document.getElementById("moonName_1").value = "Moon1"
        document.getElementById("moonRadius_1").value = "0.0288431223213"
        document.getElementById("moonMass_1").value = "10000"
        document.getElementById("moonAlbedo_1").value = "0"
        document.getElementById("moonDistance_1").value = "4.10784266075"
        document.getElementById("moonSemiaxis_1").value = "0"
        document.getElementById("moonPeriod_1").value = "0.0751017821823"
        document.getElementById("moonInclinationAngle_1").value = "90"
        document.getElementById("moonObliquityAngle_1").value = "0"
        document.getElementById("moonEccentricity_1").value = "0"

        create_moons()

        document.getElementById("moonName_2").value = "Moon2"
        document.getElementById("moonRadius_2").value = "0.0298431223213"
        document.getElementById("moonMass_2").value = "10000"
        document.getElementById("moonAlbedo_2").value = "0"
        document.getElementById("moonDistance_2").value = "4.10784266075"
        document.getElementById("moonSemiaxis_2").value = "0"
        document.getElementById("moonPeriod_2").value = "0.751017821823"
        document.getElementById("moonInclinationAngle_2").value = "75"
        document.getElementById("moonObliquityAngle_2").value = "0"
        document.getElementById("moonEccentricity_2").value = "0"
        document.getElementById("nenhum").checked = true

        noisetype('CME')

        document.getElementById("CME").checked = true
        document.getElementById("CMEX").value = "300"
        document.getElementById("CMEY").value = "400"
        document.getElementById("CMEMajorRadius").value = "400"
        document.getElementById("CMEMinorRadius").value = "150"
        document.getElementById("CMEAngle").value = "60"
    }

}

function wait() {
    document.getElementById("form").style.display = "none";
    document.getElementById("simulations").style.display = "none";
    document.getElementById("wait").style.display = "block";
}

var room = 0;
var room2 = 0;

function addRoom() {
    var objTo = document.getElementById('moons');
    var divtest = document.createElement("div");
    divtest.innerHTML = '<input type="hidden" value="' + room + '" id="room" name="room">';
    divtest.innerHTML += '<input type="hidden" value="' + room2 + '" id="room2" name="room2">';
    objTo.appendChild(divtest)
    wait()
}

function create_moons() {
    room++;
    var objTo = document.getElementById('moons')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclassMoon" + room);
    var rdiv = 'removeclassMoon' + room;
    divtest.innerHTML = '<div class="panel panel-default"> <div class="panel panel-heading text-center"> <div class="text-right"><button type="button" onclick="remove_moons_fields(' + room + ')" class="btn btn-danger"> <span class="glyphicon glyphicon-minus"></span> </button></div><strong> Lua ' + room + ' </strong></div> <div class="panel-body"> <div class="row"> <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonName_' + room + '" class="form-label">Nome:</label> <input id="moonName_' + room + '" type="text" name="moonName_' + room + '" class="form-control"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonRadius_' + room + '" class="form-label">Raio:</label> <input id="moonRadius_' + room + '" type="text" name="moonRadius_' + room + '" class="form-control" placeholder="Raio do planeta (R🜨)"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonMass_' + room + '" class="form-label">Massa:</label> <input id="moonMass_' + room + '" type="text" name="moonMass_' + room + '" class="form-control" placeholder="Massa do Planeta (M🜨)"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonAlbedo_' + room + '" class="form-label">Albedo:</label> <input id="moonAlbedo_' + room + '" type="text" name="moonAlbedo_' + room + '" class="form-control" placeholder="Adimensional (entre 0 e 1)"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonDistance_' + room + '" class="form-label">Distância:</label> <input id="moonDistance_' + room + '" type="text" name="moonDistance_' + room + '" class="form-control" placeholder="Raio da Estrela (R☉)"> </div> <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> <hr> <h3>Órbita</h3> </div> <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonSemiaxis_' + room + '" class="form-label">Semieixo:</label> <input id="moonSemiaxis_' + room + '" type="text" name="moonSemiaxis_' + room + '" class="form-control" placeholder="Raio da Estrela (R☉)"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonPeriod_' + room + '" class="form-label">Período:</label> <input id="moonPeriod_' + room + '" type="text" name="moonPeriod_' + room + '" class="form-control" placeholder="Dia"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonInclinationAngle_' + room + '" class="form-label">Ângulo de Inclinação:</label> <input id="moonInclinationAngle_' + room + '" type="text" name="moonInclinationAngle_' + room + '" class="form-control" placeholder="Graus(°)"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonObliquityAngle_' + room + '" class="form-label">Ângulo de Obliquidade:</label> <input id="moonObliquityAngle_' + room + '" type="text" name="moonObliquityAngle_' + room + '" class="form-control" placeholder="Graus (°)"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonEccentricity_' + room + '" class="form-label">Excentricidade:</label> <input id="moonEccentricity_' + room + '" type="text" name="moonEccentricity_' + room + '" class="form-control" placeholder="Adimensional (entre 0 e 1)"> </div> </div> </div> </div>';

    objTo.appendChild(divtest)
}

function remove_moons_fields(rid) {
    room--;
    $('.removeclassMoon' + rid).remove();
}

function remove_spots_fields(rid) {
    room2--;
    $('.removeclassSpot' + rid).remove();
}

function create_spots() {
    room2++;
    var objTo = document.getElementById('spots')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclassSpot" + room2);
    var rdiv = 'removeclassSpot' + room2;
    divtest.innerHTML = '<div class="panel panel-default"> <div class="panel panel-heading text-center"> <div class="text-right"><button type="button" onclick="remove_spots_fields(' + room2 + ')" class="btn btn-danger"> <span class="glyphicon glyphicon-minus"></span> </button></div> <strong> Mancha ' + room2 + ' </strong> </div> <div class="panel-body"> <div class="row"> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"> <label for="spotRadius_' + room2 + '" class="form-label">Raio:</label> <input id="spotRadius_' + room2 + '" type="text" name="spotRadius_' + room2 + '" class="form-control" placeholder="Raio Solar (R☉)"> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"> <label for="spotIntensity_' + room2 + '" class="form-label">Intensidade:</label> <input id="spotIntensity_' + room2 + '" type="text" name="spotIntensity_' + room2 + '" class="form-control" placeholder="Adimensional (entre 0 e 1)"> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"> <label for="spotLatitude_' + room2 + '" class="form-label">Latitude:</label> <input id="spotLatitude_' + room2 + '" type="text" name="spotLatitude_' + room2 + '" class="form-control" placeholder="Graus (entre -90° e 90°)"> </div> <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"> <label for="spotLongitude_' + room2 + '" class="form-label">Longitude:</label> <input id="spotLongitude_' + room2 + '" type="text" name="spotLongitude_' + room2 + '" class="form-control" placeholder="Graus (entre -90° e 90°)"> </div>';

    objTo.appendChild(divtest)
}

function field_remover() {

    while (room != 0) {
        remove_moons_fields(room)
    }

    while (room2 != 0) {
        remove_spots_fields(room2)
    }

}

function videoDialogOpener(message) {
    if (confirm(message)) {
        return false;
    }
    return true;

}

function dataDialogOpener() {
    if (confirm("Pressione OK se desejar carregar os dados da simulação")) {
        return false;
    }
    return true;

}

function noisetype(type) {
    $('.deletaruido').remove();
    var obtTo = document.getElementById('noiseDiv');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "deletaruido");
    if (type === 'FOG') {
        divtest.innerHTML = '<hr><h3 id="noiseTitle" class="text-center">Quantidade de Interferência</h3><hr><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><input id="none" type="radio" name="noise" value=0 checked><label for="none">Nenhum</label></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><input id="little" type="radio" name="noise" value=0.3><label for="little">Baixo</label></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><input id="noisy" type="radio" name="noise" value=0.6><label for="noisy">Médio</label></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><input id="great" type="radio" name="noise" value=1><label for="great">Alto</label></div>';
        obtTo.appendChild(divtest);
    }
    else if (type === 'CME') {
        divtest.innerHTML = '<hr><h3 id="noiseTitle" class="text-center">Parâmetros da CME</h3><hr><div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><label for="CMEX" class="form-label">X:</label><input id="CMEX" type="text" name="CMEX" class="form-control" placeholder="Pixel (entre 0 e 855)"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><label for="CMEY" class="form-label">Y:</label><input id="CMEY" type="text" name="CMEY" class="form-control" placeholder="Pixel (entre 0 e 855)"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><label for="CMEMajorRadius" class="form-label">Raio Maior:</label><input id="CMEMajorRadius" type="text" name="CMEMajorRadius" class="form-control" placeholder="Pixel (entre 0 e 855)"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><label for="CMEMinorRadius" class="form-label">Raio Menor:</label><input id="CMEMinorRadius" type="text" name="CMEMinorRadius" class="form-control" placeholder="Pixel (entre 0 e 855)"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"><label for="CMEAngle" class="form-label">Ângulo:</label><input id="CMEAngle" type="text" name="CMEAngle" class="form-control" placeholder="Graus (°)"></div>';
        obtTo.appendChild(divtest);
    }
    else {
        divtest.innerHTML = '';
        obtTo.appendChild(divtest);
    }
}