//Compute the air quality given an air quality index

function airToDescription(quality){
    let description;
    if (quality > 0 && quality < 50){
        description = "Good";
    }else if (quality > 51 && quality < 100){
        description = "Moderate";
    }else if (quality > 101 && quality < 150){
        description = "Unhealthy for Sensitive Groups";
    }else if (quality > 151 && quality < 200){
        description = "Unhealthy";
    }else if (quality > 201 && quality < 300){
        description = "Very Unhealthy";
    }else if (quality > 300)
        description = "Hazardous";

    return description;
}


export {airToDescription}