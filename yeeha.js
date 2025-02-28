function Yeeha(integer){
    let response;
    if (integer % 3 === 0 && integer % 7 === 0){
        response = "Yee Ha";
    }else if (integer % 3 === 0){
        response = "Yee";
    }else if (integer % 7 === 0){
        response = "Ha";
    }else if (integer % 3 !== 0 && integer % 7 !== 0){
        response = "Nada";
    }
    return response;
}

export {Yeeha}

