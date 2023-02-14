//Initial run of time data function
currentTime();

    var partner = [];
    var fileNames = [];
    var imageList = [];
    var image;
    var openList = "<li class='partner'>";
    var closeList = "</li>"; 

    //create a loop to create 6 images starting with index of 0
    for (var i=0; i<6; i++) {
        fileNames.push("partnerimage"+(i+1));
        partner.push("<img src='images/" + fileNames[i] + ".png'>");
        image = openList + partner[i] + closeList;
        imageList.push(image);
        }

    //display all six image codes stored in the array
    document.getElementById("partners").innerHTML = imageList;


    