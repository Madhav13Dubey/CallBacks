function uploadingFile(file_name,uploadURL,callback){
    console.log(`Starting uploading the file ${file_name} from the given ${uploadURL}`);
    setTimeout(()=>{
        const response = `File ${file_name} is Successfully get uploaded from the ${uploadURL} url`;
        console.log(`Uploading is over for the file :- ${file_name}`);
        callback(null,response);
    },1000);
}

uploadingFile("output_file.txt","https://upload.example.com/receive" ,function(err, result){
    if(err){
        console.log(`Error occurs while uploading file :- ${file_name}`);
    } else {
        console.log(`Updation result :- ${result}`);
    }
}); 



// OUTPUT FOR THE ABOVE CODE IS GIVEN AS :- 


//  Starting uploading the file output_file.txt from the given https://upload.example.com/receive
//	Uploading is over for the file :- output_file.txt
//	Updation result :- File output_file.txt is Successfully get uploaded from the https://upload.example.com/receive url

