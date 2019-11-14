var commonCarp = 0;
var consoleInput;

function playFunction(){
    document.getElementById("playBox").classList.toggle("screen");
    console.log('You clicked Play');
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
function rodThrow(){
	const rodThrowCheck = document.getElementById('radioButtonFishingRod');
	
	if (rodThrowCheck.checked == true){
		commonCarp += 1;
		consoleInput = document.getElementById('consoleInput').innerHTML = "";
	}
	
}