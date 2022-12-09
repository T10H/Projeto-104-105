classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Wka68qox/model.json", modelLoaded);
function modelLoaded() {
    console.log("Model loaded");
}Webcam.attach('#camera');
camera= document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("foto").innerHTML= '<img id="selfie_image" src= "'+data_uri+'"/>';
    });
}
function modelLoaded() {
    console.log("Model loaded");
}
function check() {
    img= document.getElementById("selfie_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("identificado").innerHTML= results[0].label;
        percent= results[0].confidence.toFixed(3) * 100;
        console.log(percent);
        document.getElementById("precisao").innerHTML= percent + "%";
        object= results[0].label;
    }
}