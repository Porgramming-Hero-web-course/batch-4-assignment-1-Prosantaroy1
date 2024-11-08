{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function 
    //calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: "circle";
        radius: number;
    }
    type Rectangle = {
        shape: "rectangle",
        width: number,
        height: number,
    }
    type x = Circle | Rectangle;

    //fun
    const calculateShapeArea = (shape: x) => {
       if(shape.shape === "circle"){
         return Math.PI * shape.radius * shape.radius;
       }
       if(shape.shape === "rectangle"){
          return shape.width * shape.height;
       }
    }
    const circleArea  = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea)
    console.log(rectangleArea)

    //
}