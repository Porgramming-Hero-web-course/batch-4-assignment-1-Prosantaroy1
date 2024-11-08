{
    //


    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]):boolean => {

        let bool:boolean=true;

        keys.forEach((item)=>{
            if(!(item in obj)){
                bool =false;
            }    
        })
        return bool;
    }

    
    // interface Person{
    //     name: string;
    //     age: number;
    //     email: string;
    // }

    // const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"]));



    //
}