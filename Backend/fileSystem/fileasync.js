const fs=require('fs/promises');
// const read = async () => {
//     const data = await fs.readFile("./Backend/fileSystem/data.txt", "utf-8");
//     console.log(data);;
// }
// read()

const write = async () => {
    try {
    const data = await fs.writeFile('./Backend/fileSystem/data.txt','This is new text!', 'utf-8');
    console.log("Data Written => ", data)   
    } catch (error) {
    console.log(error);
    }
}
write()