var computerInfo = website("Computer Info", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque quia computer non voluptas quisquam, csharp csharp computer placeat vel computer minus. Beatae pariatur molestias laudantium rerum, computer corporis nemo.", "pageOne.html", "_blank", 0 ); //website INFO, helps search 
var javaGuide = website("Java Guides", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque quia computer non voluptas java guides, java guide java guide computer java guides csharp guide minus. Beatae java guides molestias laudantium rerum, computer corporis nemo.", "pageTwo.html", "_blank", 0 );
var dummySiteList = website("Dummy", "dummy", "#", "_blank", 0 );
var flowerShop = website("Flower Shop", "Flower shop dolor sit amet consectetur shop elit. Odit dolorum, flower ipsum vel non eum ex odio temporibus soluta maiores perferendis cupiditate aspernatur assumenda explicabo enim obcaecati animi accusamus magnam?", "flowerShop.html", "_blank", 0 );
var javaTutorial = website("Java Tutorial", "Lorem ipsum Java sit Java Tutorial tutorial elit. Odit tutorial, voluptatem ipsum vel non eum ex odio temporibus soluta maiores perferendis cupiditate aspernatur assumenda explicabo enim obcaecati animi accusamus magnam?", "javaTurotial.html", "_blank", 0 );
var siteList = [dummySiteList, computerInfo, javaGuide, flowerShop, javaTutorial];

function searchFunction(){//triggers to search something
    let searchValue = "" + document.getElementById('searchBoxId').value;
    searchValue.toLowerCase;
    let word = "";
    for (let listLength = 0; listLength <= siteList.length; listLength++){
        for(let e = 0; e <= searchValue.length; e++){
            const searchChar = searchValue.charAt(e);
            
            let searchWord = "";
            if(searchChar != ' '){
                searchWord += searchChar;
            }else if(searchChar == ' '){
                console.log(searchChar);
                for(let m = 0; m < siteList.length; m++){
                    
                    let webDesc = siteList[m].description;
                    webDesc.toLowerCase;//makes it lower
                    for(let i = 0; i <= webDesc.length; i++){
                        
                        let currentChar = webDesc.indexOf(i);
                        if(currentChar != ' '){
                            word += currentChar; //builds up word
                            
                        }else if(currentChar == ' '){ 
                            
                            if(searchWord.includes(word)){//checks if word is one that user searched for
                            siteList[m].webScore += 1;
                            console.log(siteList[m].webScore);
                            
                            }
                            word = "";
                        }
                        
                    }
                
                }
            searchWord = "";
            }
        
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
    siteList.sort(sortFunction);
    if(siteList[0].name == "Dummy"){
        siteList.reverse();
    }

        let websiteInfoDisplay = document.getElementById('result');
            websiteInfoDisplay.innerHTML = siteList[0].name;
            websiteInfoDisplay.setAttribute("href", siteList[0].link);
            websiteInfoDisplay.setAttribute("target", siteList[0].target);
}
function website(name, description, link, target, webScore){
    return{name, description, link, target, webScore};
}
function sortFunction(x){
    return x.webScore;
}