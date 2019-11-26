var computerInfo = website("Computer Info", "Lorem ipsum, dolor sit amet computer adipisicing elit. Omnis computer computer computer non voluptas quisquam, csharp csharp computer placeat vel computer minus. Beatae pariatur computer computer computer computer computer computer rerum, computer computer nemo.", "pageOne.html", "_blank", 0 ); //website INFO, helps search 
var javaGuide = website("Java Guides", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque quia computer non voluptas java guides, java guide java guide computer java guides csharp guide minus. Beatae java guides molestias laudantium rerum, computer corporis nemo.", "pageTwo.html", "_blank", 0 );
var dummySiteList = website("Error 0", "dummy", "#", "_blank", 0 );
var flowerShop = website("Flower Shop", "Flower shop dolor sit amet consectetur shop elit. Odit dolorum, flower ipsum vel non eum ex odio temporibus soluta maiores perferendis cupiditate aspernatur assumenda explicabo enim obcaecati animi accusamus magnam?", "flowerShop.html", "_blank", 0 );
var javaTutorial = website("Java Tutorial", "Lorem ipsum Java sit Java Tutorial tutorial elit. Odit tutorial, voluptatem ipsum vel non java tutorial odio temporibus soluta maiores perferendis cupiditate aspernatur assumenda explicabo enim obcaecati animi accusamus magnam?", "javaTurotial.html", "_blank", 0 );
var siteList = [dummySiteList, computerInfo, javaGuide, flowerShop, javaTutorial];

function searchFunction(){//triggers to search something
    let searchValue = document.getElementById('searchBoxId').value + ' ';
    searchValue.toLowerCase;
	var endWordNum = 0;
    let word = "";
	let searchWord = "";
	if(searchValue.includes(' ')){
			for (let listLength = 0; listLength < siteList.length; listLength++){
			for(let e = 0; e < searchValue.length; e++){
				const searchChar = searchValue.charAt(e);
				
				
				if(searchChar != ' ' && endWordNum < searchValue.length){
					searchWord += searchChar;
					endWordNum += 1;
					console.log(`This is end word num ${endWordNum}`);
				}else if(searchChar == ' ' || endWordNum > searchValue.length){
					for(let m = 0; m < siteList.length; m++){
						
						let webDesc = siteList[m].description;
						webDesc.toLowerCase;//makes it lower
						for(let i = 0; i < webDesc.length; i++){
							
							let currentChar = webDesc.charAt(i);
							
							if(currentChar != ' '){
								word += currentChar; //builds up word
							}else if(currentChar == ' '){ 
								
								
								if(searchWord.includes(word)){//checks if word is one that user searched for
								siteList[m].webScore += 1;
								
								
								
								}
								word = "";
							}
							
						}
						
						
						console.log(searchWord);
					}
					 
					 searchWord = "";
				}
				
				console.log(`This is searchWord${searchWord}`);
			
			}
			
			endWordNum = 0;
			console.log(siteList[3].webScore);
		}
	}
    
    // for(let i = 0; i < siteList.length; i++){
    //     let n = 0;
    //     if(i > 0){
    //         n = i-1;
    //     }

    //     if(siteList[i].webScore > siteList[n].webScore){
            
    //         let websiteInfoDisplay = document.getElementById('result');
    //         websiteInfoDisplay.innerHTML = siteList[i].name;
    //         websiteInfoDisplay.setAttribute("href", siteList[i].link);
    //         websiteInfoDisplay.setAttribute("target", siteList[i].target);
    //     }
    // }
	
    /*siteList.sort(sortFunction);
	console.log(siteList)
    //if(siteList[0].name == "Dummy"){
    siteList.reverse();
	console.log(siteList);
    //}*/
	let num = 0;
	//let displayWebsite = siteList[num];
	
	
	
	
	numTwo = siteList.length;
	for(let i = 0; i < siteList.length; i++){
		if(siteList[i].webScore > siteList[num].webScore){
			num = i;
			console.log(`The highest score is ${siteList[num].name} and ${siteList[num].webScore}`);
			
			
		}	
	}

        let websiteInfoDisplay = document.getElementById('result');
            websiteInfoDisplay.innerHTML = siteList[num].name;
            websiteInfoDisplay.setAttribute("href", siteList[num].link);
            websiteInfoDisplay.setAttribute("target", siteList[num].target);
	for (let i = 0; i < siteList.length; i++){
		siteList[i].webScore = 0;
	}
}

function website(name, description, link, target, webScore){
	description.toLowerCase;
    return{name, description, link, target, webScore};
}
function sortFunction(x){
    return x.webScore;
}

























