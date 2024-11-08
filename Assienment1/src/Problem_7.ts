{
    //
    class Car {

        constructor(public make: string, public model: string, public year: number) {
        }
        getCarAge(){
            const curYear=new Date().getFullYear();
            const result=curYear-this.year;
            return `${result} (assuming current year is ${curYear})`;
          
        }

    }

    

    //
}