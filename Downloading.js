function downloading(url,callback){
    console.log(`Starting downloading data from the given url :- ${url}`);
    setTimeout(()=>{
        const data = `Data from the ${url}`;
        console.log(`Downloaded data :- ${url}`);
        callback(null,data);
    }, 1000);
}

downloading("https://example.com/data",function(err, data){
    if(err){
        console.log(`Error occured while downloading from the given url,${err}`);
    } else{
        console.log(`Data is successfully get downloaded :- ${data}`);
    }
});



// OUTPUT FOR THE ABOVE CODE IS GIVEN AS :- 


//  Starting writing the downloaded data into the file :- Dummy Downloaded Data
//	Data has been written to the file :- output_file.txt
//	Successfully data get written in the file :- output_file.txt
