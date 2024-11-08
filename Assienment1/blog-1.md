The significance of union and intersection types in Typescript.

#Union Types: 
Union Types are a type that can represent one of two or more types. Using this, we can allow a variable to hold values of multiple types.

Example:

type Frontend="Middle" | "Senior"
const newDev: Frontend="Middle"



#intersection types:

Intersection Types are a type that combines all the properties of multiple types. Using this, we can merge the features of different types to create a new type.

type frontend={
    skill: string[];
    role: 'frontend
}
type backend={
    skill: string[];
    role: 'Backend
}

type fullstackDev= frontend & backend;

const fullStack: fullstackDev={
    skill: ['html','csss', 'java'],
    role: 'frontend',
    role: 'backend'
}

