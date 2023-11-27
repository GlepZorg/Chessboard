let size = 8;


for(let i = 0; i <= size; i++){
    let row = '';
    for(let ii = 0; ii <= size; ii++){
        if(ii % 2 === 0){
            row += ' ';
            continue;
        }
        else{
            row += '#';
        }
    }
    console.log(row);
}