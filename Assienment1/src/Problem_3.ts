{
    //

    const countWordOccurrences=(str: string,word: string)=>{
        const x=str.split(" ");

        let count:number=0;
        for(const item of x){
                     
            if(item == word){
               count++;                     
            }
        }
        return count;
        
    }
    console.log(countWordOccurrences("I typescript love typescript typescript typescript", "typescript"))






    //
}