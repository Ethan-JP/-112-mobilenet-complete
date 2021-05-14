Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
    
})
Webcam.attach("#camera")

function capture(){
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML=`<img id="image" src=${img}>`
        }
    )
}

//checking the ml5 version

console.log("ml5version :"+ml5.version)

//import the model in var classifier

classifier=ml5.imageClassifier("MobileNet",modelLoaded)

//check if model is loaded with the function model loaded

function modelLoaded() {
    console.log("Model loaded successfully!")
}

//code for identifying the captured img

function identify() {
    image=document.getElementById("image")
    classifier.classify(image,gotResults)
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("obj_results").innerHTML=results[0].label
    }
}