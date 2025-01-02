let str=["hello","welcome","to","javascript"];
let str_1=[]
for(let  i=0;i<str.length;i++){
    
    let str_2="";
    if(i%2==0){
        for(let j=str[i].length-1;j>=0;j--){
            str_2+= str[i][j];
        }
    }
    else{
        str_2+= str[i];
    }
   
    str_1[i]=str_2;
    
}

console.log(str_1);











