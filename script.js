var fishCought = 0;
var commonCarp = 0;
var rainbowTrout = 0;
var clownFish = 0;
var fishingAttmpt = 0;
var playerMoney = 0;
var boughtPlayerRod = true;
var boughtMRodOne = false;
var boughtPRod = false;
var wearPlayerRod = true;
var wearMRodOne = false;
var wearPRod = false;
var totalFish = document.getElementById("totalFishC");
var totalCommonCarp = document.getElementById("totalCommonCarpC");
var totalRainbowTrout = document.getElementById("totalRainbowTroutC");
var totalClownFish = document.getElementById("totalClownFishC");
var playerDinnar = document.getElementById("totalMoney");


function fishGenerator(min, max){
    Math.ceil(min);
    Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function homeBtn(){
    const selectFishScreen = document.getElementById("fishScreen");
    const selectStatsScreen = document.getElementById("statsPage");
    totalFish = document.getElementById("totalFishC");
    totalCommonCarp = document.getElementById("totalCommonCarpC");
    totalRainbowTrout = document.getElementById("totalRainbowTroutC");
    totalClownFish = document.getElementById("totalClownFishC");
    const fishingPondRnd = fishGenerator(1, 11);
    let consoleUpdate = document.getElementById("consoleUpdate");
    
    if (selectFishScreen.checked == true){
        console.log(fishingPondRnd);
        if(boughtPlayerRod == true){
            if(fishingPondRnd == 1 || fishingPondRnd == 4 || fishingPondRnd == 5){
                consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Common Carp.";
                commonCarp += 1;
                fishCought += 1;
            }
            else if (fishingPondRnd == 3 || fishingPondRnd == 6){
                consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Rainbow Trout.";
                rainbowTrout += 1;
                fishCought += 1;
            }
            else if (fishingPondRnd == 9){
                consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Clown Fish.";
                clownFish += 1;
                fishCought += 1;
            }else{
                consoleUpdate.textContent = consoleUpdate.textContent + "You did not catch anything.";
            }
        }
    }else if(boughtMRodOne == true){
        if(fishingPondRnd == 1 || fishingPondRnd == 4 || fishingPondRnd == 5 ){
            consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Common Carp.";
            commonCarp += 1;
            fishCought += 1;
        }
        else if (fishingPondRnd == 3 || fishingPondRnd == 6 || fishingPondRnd == 2){
            consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Rainbow Trout.";
            rainbowTrout += 1;
            fishCought += 1;
        }
        else if (fishingPondRnd == 9){
            consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Clown Fish.";
            clownFish += 1;
            fishCought += 1;
        }else{
            consoleUpdate.textContent = consoleUpdate.textContent + "You did not catch anything.";
        }
    }else if(boughtPRod == true){
        if(fishingPondRnd == 1 || fishingPondRnd == 4 || fishingPondRnd == 5 ){
            consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Common Carp.";
            commonCarp += 1;
            fishCought += 1;
        }
        else if (fishingPondRnd == 3 || fishingPondRnd == 6 || fishingPondRnd == 2){
            consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Rainbow Trout.";
            rainbowTrout += 1;
            fishCought += 1;
        }
        else if (fishingPondRnd == 9 || fishingPondRnd == 2){
            consoleUpdate.textContent = consoleUpdate.textContent + "You cought a Clown Fish.";
            clownFish += 1;
            fishCought += 1;
        }else{
            consoleUpdate.textContent = consoleUpdate.textContent + "You did not catch anything.";
        }
    }
    
    if(selectStatsScreen.checked == true)
    {
        totalFish.textContent = " " + fishCought;
        totalCommonCarp.textContent =  " " + commonCarp;
        totalRainbowTrout.textContent =  " " + rainbowTrout;
        totalClownFish.textContent = " " + (clownFish);
    }
}
function sell(){
    const sellCC = document.getElementById("sellCommonCarp");
    const sellRT = document.getElementById("sellRainbowTrout");
    const sellCF = document.getElementById("sellClownFish");
    const totalMoney = document.getElementById("totalMoney");
    if (sellCC.checked == true){
        if(commonCarp > 0){
            commonCarp -= 1;
            playerMoney += 1;
            consoleUpdate.textContent = consoleUpdate.textContent + "You sold Common Carp(x1) for 1 Golden Dinnar";
        }
    }
    else if(sellRT.checked == true){
        if(rainbowTrout > 0){
            rainbowTrout -= 1;
            playerMoney += 2;
            consoleUpdate.textContent = consoleUpdate.textContent + "You sold Rainbow Trout(x1) for 2 Golden Dinnar";
        }
    }
    else if(sellCF.checked == true){
        if(clownFish > 0){
            clownFish -= 1;
            playerMoney += 3;
            consoleUpdate.textContent = consoleUpdate.textContent + "You sold Clown Fish(x1) for 3 Golden Dinnar";
        }
    }
    totalMoney.textContent = totalMoney.textContent + " " + playerMoney;
}
function buy(){
    const buyMRodOne = document.getElementById("morrocanRodOne");
    const buyPRod = document.getElementById("premimumRod");
    if(buyMRodOne.checked == true){
        playerMoney -= 10;
        boughtMRodOne = true;
        consoleUpdate.textContent = consoleUpdate.textContent + "You bought Moorocan Rod Series One (x1)";
    }
    else if(buyPRod.checked == true){
        playerMoney -= 50;
        boughtPRod = true;
        consoleUpdate.textContent = consoleUpdate.textContent + "You bought Premimum Rod (x1)";
    }
}
function gear(){
    const wearBRod = document.getElementById("useBRod");
    const wearMRodOne = document.getElementById("useMRodOne");
    const wearPRod = document.getElementById("usePRod");
    if(wearBRod.checked == true){
        wearPlayerRod = true;
        wearMRodOne = false;
        wearPRod = false;
        consoleUpdate.textContent = consoleUpdate.textContent + "You are now wearing Basic Rod";
    }else if(wearMRodOne.checked == true && (playerMoney - 10) >= 0){
        wearPlayerRod = false;
        wearMRodOne = true;
        wearPRod = false;
        consoleUpdate.textContent = consoleUpdate.textContent + "You are now wearing Moorocan Rod Series One";
    }else if(wearPRod.checked == true && (playerMoney - 50) >= 0){
        wearPlayerRod = false;
        wearMRodOne = false;
        wearPRod = true;
        consoleUpdate.textContent = consoleUpdate.textContent + "You are now wearing Premimum Rod";
    }
}
function playClick(){
    document.getElementById('hidePlayScreenId').classList.toggle("hideScreen");
    consoleUpdate.textContent = consoleUpdate.textContent + "You clicked the Play Button";
    
}
function statsClick(){
    
    document.getElementById('hideStatsScreenId').classList.toggle('hideScreenStats');
    totalFish.textContent = " " + fishCought;
    totalCommonCarp.textContent =  " " + commonCarp;
    totalRainbowTrout.textContent =  " " + rainbowTrout;
    totalClownFish.textContent = " " + clownFish;
    playerDinnar.textContent = " " + playerDinnar;
    consoleUpdate.textContent = consoleUpdate.textContent + "You clicked the Stats Button";
}
function shopClick(){
    document.getElementById('shopScreenId').classList.toggle('hideScreenShop');
    consoleUpdate.textContent = consoleUpdate.textContent + "You clicked the Shop Button";
}
function gearClick(){
    document.getElementById('gearChangeScreenId').classList.toggle('hideScreenGear');
    consoleUpdate.textContent = consoleUpdate.textContent + "You left home screen";
}
function sellPageClick(){
    document.getElementById("shopScreenId2").classList.toggle("hideScreenShop2");
    consoleUpdate.textContent = consoleUpdate.textContent + "You left Shop Page";
}
function buyPageClick(){
    document.getElementById("shopScreenId3").classList.toggle("hideScreenShop3");
}
