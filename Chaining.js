function downloading(url,callback){
    console.log(`Starting downloading data from the given url :- ${url}`);
    setTimeout(()=>{
        const data = `Data from the ${url}`;
        console.log(`Downloaded data :- ${url}`);
        callback(null,data);
    }, 1000);
}


function writingFile(data,callback){
    console.log(`Starting writing the downloaded data into the file :- ${data}`);
    setTimeout(()=>{
        const file_name = `output_file.txt`;
        console.log(`Data has been written to the file :- ${file_name}`);
        callback(null,file_name);
    },1000);
}


function uploadingFile(file_name,uploadURL,callback){
    console.log(`Starting uploading the file ${file_name} from the given ${uploadURL}`);
    setTimeout(()=>{
        const response = `File ${file_name} is Successfully get uploaded from the ${uploadURL} url`;
        console.log(`Uploading is over for the file :- ${file_name}`);
        callback(null,response);
    },1000);
}

const downloadURL =  "https://example.com/data";
const uploadURL = "https://upload.example.com/receive"

downloading(downloadURL,function(err, data){
    if(err){
        console.log(`Error occured while downloading from the given url,${err}`);
    } else{
        console.log(`Data is successfully get downloaded :- ${data}`);
        
        writingFile("Dummy Downloaded Data", function(err, file_name){
    if(err){
        console.log(`Error occurs while writing in the ${file_name} file`);
    } else {
        console.log(`Successfully data get written in the file :- ${file_name}`);
        
        
        
        uploadingFile("output_file.txt",uploadURL ,function(err, result){
    if(err){
        console.log(`Error occurs while uploading file :- ${file_name}`);
    } else {
        console.log(`Updation result :- ${result}`);
    }
});


    }
});


    }
});    



// OUTPUT FOR THE ABOVE CODE IS GIVEN AS :- 


//  Starting downloading data from the given url :- https://example.com/data
//	Downloaded data :- https://example.com/data
//	Data is successfully get downloaded :- Data from the https://example.com/data
//	Starting writing the downloaded data into the file :- Dummy Downloaded Data
//	Data has been written to the file :- output_file.txt
//	Successfully data get written in the file :- output_file.txt
//	Starting uploading the file output_file.txt from the given https://upload.example.com/receive
//	Uploading is over for the file :- output_file.txt
//	Updation result :- File output_file.txt is Successfully get uploaded from the https://upload.example.com/receive url

