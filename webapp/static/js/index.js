function test1() {

    if (!dialogOpener()){
        window.location.replace("/simulator?video=1")
        return;
    }
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
    document.getElementById("none").checked = true
}

function test2() {

    if (!dialogOpener()){
        window.location.replace("/simulator?video=2")
        return;
    }

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
    document.getElementById("none").checked = true


}

function test3() {

    if (!dialogOpener()){
        window.location.replace("/simulator?video=3")
        return;
    }

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
    document.getElementById("none").checked = true


}

function test1F() {

    if (!dialogOpener()){
        window.location.replace("/simulator?video=1F")
        return;
    }
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
    document.getElementById("little").checked = true
}

function test2F() {

    if (!dialogOpener()){
        window.location.replace("/simulator?video=2F")
        return;
    }

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
    document.getElementById("noisy").checked = true;


}

function test3F() {

    if (!dialogOpener()){
        window.location.replace("/simulator?video=3F")
        return;
    }

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
    document.getElementById("great").checked = true;

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
    divtest.innerHTML = '<div class="panel panel-default"> <div class="panel panel-heading"> <div class="text-right"><button type="button" onclick="remove_moons_fields(' + room + ')" class="btn btn-danger"> <span class="glyphicon glyphicon-minus"></span> </button></div> Moon ' + room + ' </div> <div class="panel-body"> <div class="row"> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonName_' + room + '" class="form-label">Name:</label> <input id="moonName_' + room + '" type="text" name="moonName_' + room + '" class="form-control"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonRadius_' + room + '" class="form-label">Radius:</label> <input id="moonRadius_' + room + '" type="text" name="moonRadius_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonMass_' + room + '" class="form-label">Mass:</label> <input id="moonMass_' + room + '" type="text" name="moonMass_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonAlbedo_' + room + '" class="form-label">Albedo:</label> <input id="moonAlbedo_' + room + '" type="text" name="moonAlbedo_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonDistance_' + room + '" class="form-label">Distance:</label> <input id="moonDistance_' + room + '" type="text" name="moonDistance_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <hr> <h3>Orbit</h3> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonSemiaxis_' + room + '" class="form-label">Semiaxis:</label> <input id="moonSemiaxis_' + room + '" type="text" name="moonSemiaxis_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonPeriod_' + room + '" class="form-label">Period:</label> <input id="moonPeriod_' + room + '" type="text" name="moonPeriod_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonInclinationAngle_' + room + '" class="form-label">Inclination Angle:</label> <input id="moonInclinationAngle_' + room + '" type="text" name="moonInclinationAngle_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonObliquityAngle_' + room + '" class="form-label">Obliquity Angle:</label> <input id="moonObliquityAngle_' + room + '" type="text" name="moonObliquityAngle_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="moonEccentricity_' + room + '" class="form-label">Eccentricity:</label> <input id="moonEccentricity_' + room + '" type="text" name="moonEccentricity_' + room + '" class="form-control" placeholder="Unidade de Medida"> </div> </div> </div> </div>';

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
    divtest.innerHTML = '<div class="panel panel-default"> <div class="panel panel-heading"> <div class="text-right"><button type="button" onclick="remove_spots_fields(' + room2 + ')" class="btn btn-danger"> <span class="glyphicon glyphicon-minus"></span> </button></div> Spot ' + room2 + ' </div> <div class="panel-body"> <div class="row"> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="spotRadius_' + room2 + '" class="form-label">Radius:</label> <input id="spotRadius_' + room2 + '" type="text" name="spotRadius_' + room2 + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="spotIntensity_' + room2 + '" class="form-label">Intensity:</label> <input id="spotIntensity_' + room2 + '" type="text" name="spotIntensity_' + room2 + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="spotLatitude_' + room2 + '" class="form-label">Latitude:</label> <input id="spotLatitude_' + room2 + '" type="text" name="spotLatitude_' + room2 + '" class="form-control" placeholder="Unidade de Medida"> </div> <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"> <label for="spotLongitude_' + room2 + '" class="form-label">Longitude:</label> <input id="spotLongitude_' + room2 + '" type="text" name="spotLongitude_' + room2 + '" class="form-control" placeholder="Unidade de Medida"> </div>';

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

function dialogOpener(){
    if (confirm("Do you want do load the simulation video?")){
        return false;
    }
    return true;
}