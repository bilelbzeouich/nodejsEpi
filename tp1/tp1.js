 const fs = require('node:fs');

 // create new files 
 
 for (let i = 0; i < 4; i++){
    // Create a new file named mynewfile1.txt, mynewfile2.txt, mynewfile3.txt, mynewfile4.txt
    //verif files name is mynewfile1.txt
    if(i== 0){
        // Create a new file named mynewfile
        fs.writeFile(`mynewfile${i+1}.txt`, `mynewfile${i+2}.txt`, (err) => {
          if (err) {
            console.error(`Error writing to file mynewfile${i+1}.txt`, err);
            return;
          }
          console.log(`File mynewfile${i+1}.txt created successfully.`);
        });
    }   
        //verif files name is mynewfile2.txt
    if  (i== 1){
     // Create a new file named mynewfile
        fs.writeFile(`mynewfile${i+1}.txt`, `dataattatddatata`, (err) => {
          if (err) {
            console.error(`Error writing to file mynewfile${i+1}.txt`, err);
            return;
          }
          console.log(`File mynewfile${i+1}.txt created successfully.`);
        });
    }
    if  (i== 2){
          // Create a new file named mynewfile
        fs.writeFile(`mynewfile${i+1}.txt`, `dataattatddatata`, (err) => {
          if (err) {
            console.error(`Error writing to file mynewfile${i+1}.txt`, err);
            return;
          }
          console.log(`File mynewfile${i+1}.txt created successfully.`);
        });
    }

    if  (i== 3){
          // Create a new file named mynewfile
          fs.readFile(`mynewfile${i}.txt`, 'utf8', (err, data1) => {
            if (err) {
            console.error("old data", err);
            return;
            }
            fs.readFile(`mynewfile${i-1}.txt`, 'utf8', (err, data2) => {
                if (err) {
                    console.error("old data", err);
                    return;
                    }
                 fs.writeFile(`mynewfile${i+1}.txt`, `${data1+data2}`, (err) => {
                            if (err) {
                              console.error("error writing to file", err);
                              return;
                            }
                            console.log("File updated successfully");
                          })

            });
    });
 }}
// const content = (path) => {
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       console.error("old data", err);
//       return;
//     }
//   console.log(data);  });
// };
//   // append data to file 
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       console.error("old data", err);
//       return;
//     }
//     fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
//         if (err) throw err;
//         console.log('Replaced!');
//       });
//     });

  
//  const impliment = fs.appendFile('./data.txt', 'new data', (err) => {
//     if (err) {
//       console.error("error writing to file", err);
//       return;
//     }
//     console.log("File updated successfully");
//   })

//   // read data from file if existing
//   content('./data.txt');

//   // create new file is not existing
//  const create = fs.writeFile('./new_data.txt', 'new data', (err) => {
//     if (err) {
//       console.error("Error writing to file", err);
//       return;
//     }
//     console.log("New file created successfully");
//   })

//   // check if file exists file 
//   const fileExists = fs.existsSync('./dat00a.txt');

//   // execute operations based on file existance
//   fileExists ? (impliment, content('./data.txt')) : create, content('./new_data.txt');




