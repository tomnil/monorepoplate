import { SendMailToUser } from "@suzieq/emailhelper";
import { List as ProductList } from "@suzieq/products";
import { ValidateUserName } from "@suzieq/validatorhelper";


console.log("This is index.ts");

console.log(ProductList());

console.log("ValidateUserName says:");
console.log(ValidateUserName("Hop"));

SendMailToUser("Hop");

