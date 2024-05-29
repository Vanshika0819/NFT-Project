let numberOfNFTs = 0;
let inputed_nfts = []; 



function minNFT(name, WETH, Floor,image) {
    let descNFT = {
        name: name,
        WETH: WETH,
        Floor: Floor,
      image:image
    };
    inputed_nfts.push(descNFT); 
    numberOfNFTs++; 
    displayvalues();
  

}

function getTotalSupply() {

    return numberOfNFTs;
    
 }
     


function displayvalues() {
     let rContainer = document.getElementById("demo");
       rContainer.innerHTML = ''; 
     
     inputed_nfts.forEach(value => {
         
         let valuediv = document.createElement('div');
         valuediv.classList.add("value");

         
         let image1 = document.createElement("img");
         image1.src = value.image;
         image1.alt = value.name;
         image1.classList.add("value-image");

        
         valuediv.appendChild(image1);

         
         let characterticsdiv = document.createElement('div');
         characterticsdiv.classList.add("value-charactertics");

         
         let name1 = document.createElement('p');
         name1.textContent = ("Name:" +value.name);

         let WETH1 = document.createElement('p');
         WETH1.textContent = ("WETH: "+value.WETH);

         let Floor1 = document.createElement('p');
         Floor1.textContent = ("Floor: "+value.Floor);

         
         characterticsdiv.appendChild(name1);
         characterticsdiv.appendChild(WETH1);
         characterticsdiv.appendChild(Floor1);
        
         valuediv.appendChild(characterticsdiv);
         

         
         valuediv.addEventListener('click', () => 
            displayvalueDetails(value));

        
         rContainer.appendChild(valuediv);
     });
   }



function listNFTs() {
    inputed_nfts.forEach(function(nft) {
        console.log("Name: " + nft.name);
        console.log("WETH: " + nft.WETH);
        console.log("Floor: " + nft.Floor);
      console.log("Image: " + nft.image);
    });
}

function addNFTs() {
let a = prompt("Enter the name of the NFT");
alert("Entered name is"+a);
let b = prompt("Enter the WETH of the NFT");
alert("Entered WETH are "+ b);
let c = prompt("Enter the Floor of the NFT");
alert("Entered Floor is"+c);
let d = prompt("Enter the image of the NFT");
alert("URL of the image to be displayed is"+d);
minNFT(a,b,c,d);


listNFTs();

console.log("Total nfts "+getTotalSupply());


   
}



async function p(){
  let ADDNFTS = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("NFTS added");
                  
          }, 2000)
  })
  let listnfts = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("List of nfts are updated");
                    
              
            }, 5000)
    })
  let a = await ADDNFTS;
   console.log(a);
  let b = await listnfts;
  console.log(b);
}

function q() {
     addNFTs(); 
     
    (async () => {
        try {
            let result = await p(); 
            
        } catch (error) {
            console.error("Error:", error);
        }
    })();
}







