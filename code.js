/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

let Nfts = []
function mintNFT ( name , description , owner) {
const nft= {
    name : name,
    description : description,
    owner:owner
};
Nfts.push(nft);
console.log("Nft minted successfully")
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("..........................................."); 
    for (let i = 0; i < Nfts.length; i++) {
        console.log('Name: '+ Nfts[i].name )
        console.log('Description : '+ Nfts[i].description )
        console.log('Name: '+ Nfts[i].name )
        console.log("...........................................");        
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("total no of NFT's are "+ Nfts.length);
}

// call your functions below this line

mintNFT("nft1", "description 1", " kamal ");
mintNFT("nft2", "description 2", " rohan ");
mintNFT("nft3", "description 3", " rahul ");


getTotalSupply();
listNFTs();
