function computerPlay () {
    let temp = Math.floor(Math.random() * 3);
    switch (temp) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
        default:
            return "wtf";
    }
}