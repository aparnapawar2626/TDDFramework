
export class calc
{
/*add(a:number,b:number):number
{
   return a+b;
}

sub(a:number, b:number):number
{
    return a-b;
}

mul(a:number, b:number):number
{
  return a*b;
}

div(a:number, b: number):number
{
    return a/b;
}*/
 
///construct///

 /*x:number;
  y :number;

constructor(a:number, b:number)
{
    this.x=a;
    this.y=b;
}
 add():number
 {
    return this.x+this.y;
 }
 sub():number
 {
    return this.x-this.y;
 }
 mul():number
 {
    return this.x*this.y;
 }
 div():number
 {
    return this.x/this.y;
 }  */

//////////////Static/////////
static add(a:number,b:number):number
{
    return a+b;
}
static opencalc()
{
    console.log("static method opencalc");
}
} 


////// Inheritance////

class fruits
{
    orange:number=10;
    banana:number=20;
    makejuice()
    {
        console.log("make juice");
    }
     makejam()
     {
        console.log("make jam");
     }
}

export class orange extends fruits
{
makecandy()
{
    console.log("make candy");
}
makesalad()
{
    console.log("make salad");
}
}

////// Poly+morphism////
////***************OVERRIDING POLYMORPHISM***********////////////


class Testing
{
    regression()
    {
        console.log("regression testing having 100 test cases");
    }
    sanity()
    {
        console.log("sanity testing having 20 test cases");
    }
}

export class AutoTesting extends Testing
{
regression()
{
    console.log("regression testing via AutoTesting  having 100 test cases");
}
sanity()
{
    console.log("sanity testing via Autotesting havving 20 test cases");
}
}


////////////////ENCAPSULATION//////////////

export class employee
{
    emname:string = "Aparna";
    private emsalary:number = 2000000;
    getSalary(designation:string):number
     {
        if(designation == "Manager" || designation == "HR")
        {
            return this.emsalary;
             }
     else
        {
        console.log("You are not Authorized toaccess the salary");
        return 0;
        }
    }
     
    setSalary(salary:number, designation:string)

     {
        if(designation == "Manager" || designation == "HR")
        {
          this.emsalary = salary;
         }
    else
        {
        console.log("You are not Authorized to update the the salary");
        }
     } 

    }

    //////////////ABSTRACTION/////////////

    abstract class Abstraction 
    {
        abstract knowEngine():void
        abstract Torue():void
        knowMilage()
        {
            console.log("knoe Milage");
        }
        knowfuel()
        {
            console.log("know fuel");
        }
    }

    export class useabsrc extends Abstraction
    {
        knowEngine():void
        {
              console.log("know Engine");
        }
       knoeTorue()
       {
        console.log("know torue");
       }
    
    }

    /////////////////////INTERFACE//////////////
    ///// interface is by default 100% abstract//
    interface interface1
    {
        knowEngine():void;
        knowTorue():void;
        knowMilage():void;
        
    }

    interface interface2
    {
        knowEngine2():void;
        knowTorue2():void;
        knowMilage2():void;
        
    }
    export class useinterface implements interface1,interface2
    {
        knowEngine():void
        {
              console.log("know Engine");
        }
       knoeTorue()
       {
        console.log("know torue");
       }
       knowMilage()
        {
            console.log("knoe Milage");
        }
        knowEngine2():void
        {
              console.log("know Engine2");
        }
       knoeTorue2()
       {
        console.log("know torue2");
       }
       knowMilage2()
        {
            console.log("knoe Milage2");
        }
    }