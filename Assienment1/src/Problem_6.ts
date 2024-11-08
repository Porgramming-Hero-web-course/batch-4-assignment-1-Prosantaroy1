{
    //
    
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    type update=Partial<Profile>;

    const updateProfile = (object: Profile, newarr: update) => {
            return {...object, ...newarr}
    }
    
    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));



    //
}