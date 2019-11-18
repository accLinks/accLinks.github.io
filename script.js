var commonCarp = 0;
var consoleBox = document.getElementById('consoleText');
var consoleTextNumber = 0;
//Fish variables 
var totalFishCought = 0;
var commonCarp = makeFish("Common Carp", 2, 0, 1);
var goldenGreyMullet = makeFish("Golden Grey Mullet", 3, 0, 2);
var blueTang = makeFish("Blue Tang", 4, 0, 3);
//Fishing rod
var standredSamakRod = designRod("Standrd Samak Leauge Rod", 2, true);
var laythRod = designRod("Layth Rod", 3, false, 10);
var preimumRod = designRod("Premimum Rod", 4, false, 25);
var totalDinar = 0;


//Functions
function playFunction(){
    document.getElementById("playBox").classList.toggle("screen");
}
function infoFunction(){
    document.getElementById('infoBox').classList.toggle('screen');
}
function shopFunction(){
    document.getElementById('shopBox').classList.toggle('screen');
}
function inventoryFunction(){
    document.getElementById('inventoryBox').classList.toggle('screen');
}
function sellBoxFunction(){
    document.getElementById('sellBox').classList.toggle('screen');
}
function buyBoxFunction(){
    document.getElementById('buyBox').classList.toggle('screen');
}
function moroccanLakeFunction(){
	document.getElementById('moroccanBox').classList.toggle('screen');
}
function rodThrowMoroccanLake(){
    const rodThrowCheck = document.getElementById('radioButtonFishingRod');
    const laythRodCheck = document.getElementById('radioButtonGGMRod');
        /*if (rodThrowCheck.checked == true && commonCarp.weight <= standredSamakRod.power && standredSamakRod.bought == true){
            commonCarp.ammountOwned += 1;
            consoleBox.innerHTML += `You cought one ${commonCarp.name}, you now have ${commonCarp.ammountOwned} Common Carp in total.</br>`;
            consoleTextNumber += 1;
            deleteConsoleText();
        }*/
        catchFish(standredSamakRod, commonCarp, rodThrowCheck);
        catchFish(laythRod, goldenGreyMullet, laythRodCheck);
        catchFish(laythRod, goldenGreyMullet, laythRodCheck);
}
function buyAreaFunction(){
    document.getElementById('buyAreaBox').classList.toggle('screen');
}
function buyRodPageFunction(){
    document.getElementById('buyRodBox').classList.toggle('screen');
}
function buyLaythRod(){
    buyRodFunction(laythRod);
}
function buyRodFunction(rod){
    if(totalDinar >= rod.price && rod.bought == false){
        totalDinar -= rod.price;
        rod.bought == true;
        consoleBox.innerHTML += `You bought ${rod.name} for ${rod.price} Dinar.</br>`;
        deleteConsoleText();
    }else{
        consoleBox.innerHTML += "Error, check to see if you have enough money or if you already bought the rod. </br>";
        deleteConsoleText();
    }
}
function sellFish(fish){
    if(fish.ammountOwned > 0){
        fish.ammountOwned -= 1;
        totalDinar += fish.price;
        consoleBox.innerHTML += `You sold 1x Common Carp for ${commonCarp.price} Dinar, you now have ${totalDinar} Dinar.</br>`;
        console.log(totalDinar);
        deleteConsoleText();
    }else{
        consoleBox.innerHTML += `Error, you do not own enough ${fish.name} </br>`;
        deleteConsoleText();
    }
    
}
function sellCCFunction(){
    sellFish(commonCarp);
}
function sellGGMFunction(){
    sellFish(goldenGreyMullet);
}
function sellBTFunction(){
    sellFish(blueTang);
}


//functions for fish and to delete fish
function catchFish(rod, fish, rodCheck){
    if(!rodCheck.checked || !rod.bought) { 
        errorOne = consoleBox.innerHTML += "Error, you either did not have any option checked or you have not bought the rod. </br>";
        consoleTextNumber += 1;
        deleteConsoleText();
        return errorOne; }
    if(rodCheck.checked == true && rod.power >= fish.weight && rod.bought == true){
        fish.ammountOwned += 1;
        totalFishCought += 1;
        consoleBox.innerHTML += `You cought one ${fish.name}, you now have ${fish.ammountOwned} ${fish.name} in total. </br>`
        deleteConsoleText();
        updateStats();
    }
}
function makeFish(name, weight, ammountOwned, price){
	return {name, weight, ammountOwned, price}
}
function designRod(name, power, bought, price){
	return {name, power, bought, price}
}
function deleteConsoleText(){
    consoleTextNumber += 1;
    if(consoleTextNumber >= 25){
        consoleBox.innerHTML = "";
        consoleTextNumber = 0;
    }
}
function updateStats(){
    document.getElementById('totalFishCoughtStats').innerHTML = "Total Fish Cought: " + totalFishCought;
    document.getElementById('totalCCCStats').innerHTML = "Total Common Carps Cought: " + commonCarp.ammountOwned;
    document.getElementById('totalGGMCStats').innerHTML = "Total Golden Grey Mullet Cought: " + goldenGreyMullet.ammountOwned;
    document.getElementById('totalBTCStats').innerHTML = "Total Blue Tang Cought: " + blueTang.ammountOwned;
    document.getElementById('totalDinarStats').innerHTML = "Total Dinar: " + totalDinar;

}






