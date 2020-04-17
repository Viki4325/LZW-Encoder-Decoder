// CLASS: Hashable
     //
     // Author: Makadia Viki Suresh, 7870989
     //
     // REMARKS: This class implements the Hashable abstract class.Has two abstract methods so that they are enforced in its subclasses
     //
     //-----------------------------------------
'use strict'
//This is an abstract class
class Hashable
{
    constructor()
    {
        if(this.constructor === Hashable)
        {
            throw new Error("Don't create an instance of an abstract class!");
        }
    }
    //abstract methods
    hashVal()
    {
        throw new Error("Concrete subclasses MUST have hashVal() function");
    }
    equals(x)
    {
        throw new Error("Concrete subclasses MUST have an equals(x) function");
    }
}

module.exports = Hashable;