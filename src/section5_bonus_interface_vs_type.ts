// BONUS TASK:
// Create a shape using both an interface and a type alias:
// - Each should define a Shape with width: number and height: number
// Add a comment explaining when you might use one over the other.

// Your code here 👇

interface ShapeInterface {
  width: number;
  height: number;
}

type ShapeType = {
  width: number;
  height: number;
};

const shapeA: ShapeInterface = { width: 100, height: 200 };
const shapeB: ShapeType = { width: 50, height: 75 };
