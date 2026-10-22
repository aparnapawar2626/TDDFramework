import { test, expect } from '@playwright/test';

import {calc,orange,AutoTesting,employee,useabsrc,useinterface} from '../typescriptcode/calculator';

test('tests',async({page})=>{

//console.log("hello world");
//console.log("hi good morning");
//let a:number=10;
//let b:number=30;
//let c:number=a+b;
//console.log("sum of two numbers="+c);

/*let c = await new calc();
await console.log(c.add(20,10));
await console.log(c.sub(20,10));
await console.log(c.mul(20,10));
await console.log(c.div(20,10));*/

///// Constructor///

/*let ctr = await new calc(100,50);
await console.log(ctr.add());
await console.log(ctr.sub());
await console.log(ctr.mul());
await console.log(ctr.div());*/

/////////Static///////
 /*await console.log(calc.add(10,5));
 await calc.opencalc();  */
 //Math.sqrt(16);
 //Math.pow(2,6);

////// In+heritance////

/*const orng = await new orange();
await console.log(orng.banana);
await console.log(orng.banana);
await orng.makecandy();
await orng.makejam();
await orng.makejuice();
await orng.makesalad(); */

///***************OVERRIDING POLYMORPHISM***********////////////

/*const poly = await new AutoTesting();
await poly.regression();
await poly.sanity(); */

////////////////ENCAPSULATION//////////////

/*const emp = await new employee();
await console.log(emp.emname);
//await console.log(emp.emsalary);
await emp.setSalary(4000000, "Praphull");
console.log(emp.getSalary("Praphull"));
wait emp.setSalary(4000000, "HR");
console.log(emp.getSalary("Manager"));  */

    //////////////ABSTRACTION/////////////

    /*const ab = await new useabsrc();
    await ab.knoeTorue();
    await ab.knowEngine();
    await ab.knowMilage();
    await ab.knowfuel();  */

        ////////////()/////////INTERFACE//////////////

        const int = new useinterface();
        int.knoeTorue();
        int.knowEngine();
        int.knowMilage();
        int.knoeTorue2();
        int.knowEngine2();
        int.knowMilage2();
        


});