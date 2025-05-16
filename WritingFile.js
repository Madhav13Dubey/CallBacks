function writingFile(data,callback){
    console.log(`Starting writing the downloaded data into the file :- ${data}`);
    setTimeout(()=>{
        const file_name = `output_file.txt`;
        console.log(`Data has been written to the file :- ${file_name}`);
        callback(null,file_name);
    },1000);
}

writingFile("Dummy Downloaded Data", function(err, file_name){
    if(err){
        console.log(`Error occurs while writing in the ${file_name} file`);
    } else {
        console.log(`Successfully data get written in the file :- ${file_name}`);
    }
});



// OUTPUT FOR THE ABOVE CODE IS GIVEN AS := 


//     Starting downloading data from the given url :- https://example.com/data
//     Downloaded data :- https://example.com/data
//     Data is successfully get downloaded :- Data from the https://example.com/data
