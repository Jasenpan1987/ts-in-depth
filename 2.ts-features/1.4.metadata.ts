import "reflect-metadata";
// // you need this library to play with the metadata

// Part I
// const plane = {
//   color: "red"
// };

// // Reflect.defineMetadata("note", "Hi there", plane);
// // console.log(plane); // you won't see "note"

// // const planeNote = Reflect.getMetadata("note", plane);
// // console.log("note in decorator", planeNote); // "Hi there"

// // metadata works similar to prototype, we can
// // add on properties to an object. to see it, you
// // need to use Reflect.getMetadata and pass in
// // the key of the meta data

// Reflect.defineMetadata("degree", 85, plane, "color");
// // you can also attach metadata on object's property
// const degree = Reflect.getMetadata("degree", plane, "color");
// console.log(degree); // 85

// Part II
// metadata and class
// @printMetadata
// class Plane {
//   color: string = "red";

//   @markFunction("Very Secret!!")
//   fly() {
//     console.log("plane is flying");
//   }
// }

// function markFunction(secretInfo: string) {
//   return function(target: any, key: string, desc: PropertyDescriptor) {
//     Reflect.defineMetadata("secret", secretInfo, target, key);
//   };
// }

// // const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// // console.log(secret);

// // retrieve more effciently
// function printMetadata(target: typeof Plane) {
//   for (let key in target.prototype) {
//     const secret = Reflect.getMetadata("secret", target.prototype, key);
//     console.log("Secret:: ", secret);
//   }
// }

// Part III
// this is close to express with controller decorators
@controller
class Routes {
  @get("/login")
  login() {
    console.log("go to LOGIN route");
  }

  @get("/userdetail")
  userDetail() {
    console.log("go to USER DETAIL route");
  }
}

function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

// retrieve more effciently
function controller(target: typeof Routes) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log("path:: ", path);
  }
}
