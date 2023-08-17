function totalArea(width,height){
    if(width<0 || height<0){
        return "Dimensions  must be positive values"
    }
   return width*height;
}

const width = 5;
const height = 8;

const total = totalArea(width,height);
console.log(`The area is ${total} `)
