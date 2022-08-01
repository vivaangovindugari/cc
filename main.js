function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4nmHN-NG2/model.json', modelReady);
}














function modelReady()
{
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var t_rex = 0;
var pig = 0;
function gotResults(error , results)
{
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ ' Detected T-rex-'+t_rex+' Detected Pig -'+pig;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_image');



        if (results[0].label == "Barking") {
            img.src = "https://c.tenor.com/b1DVdUGztTIAAAAC/cartoon-dog.gif";
            dog = dog+1;
        }
        else if (results[0].label == "Oinking") {
            img.src = "https://c.tenor.com/Le7TeCFqSIUAAAAM/monday.gif";
            pig = pig+1;
        }
        else if (results[0].label == "Roaring") {
            
            img.src = "https://media.baamboozle.com/uploads/images/59961/1649596420_230376_gif-url.gif";
            t_rex = t_rex+1;
        }
        else if (results[0].label == "Meowing") {
            
            img.src = "https://media3.giphy.com/media/yXPquATCb8kGk/giphy.gif";
            cat = cat+1;
        }
         else {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BZSYi-a8LwB3lzxWWAPoAlW06CifNTcauw&usqp=CAU";
        }
    }


        
    }