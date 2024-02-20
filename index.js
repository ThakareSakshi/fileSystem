const fs=require("fs").promises
const readline=require("readline");
const path=require("path");


const filepath=path.join(__dirname,"todo.txt")


 function getInput(question){
    const r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout

    })

    return new Promise((resolve,reject)=>{
        r1.question(question,resolve);
    })
}

async function addTask(){
   const  inputText=await getInput("Enter Task : ");
    await fs.appendFile(filepath,inputText);
}



async function main(){

    while(true){
        console.log("\n 1. Add new task");
        console.log("2. view task list");
        console.log("3. mark as done");
        console.log("4. remove a task"); 

        const choice=await getInput("enter your choice : ");
        switch(choice){
            case "1": addTask();break;
            case "2": viewTask();break;
            case "3": markDone();break;
            case "4":removeTask();break;


        }
    }
}
main();