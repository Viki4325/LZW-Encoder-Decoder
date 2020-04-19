// CLASS: IntHash
     //
     //
     // REMARKS: This class implements the IntHash and this is a subclass of Hashable
     //
     //-----------------------------------------
'use strict'
let Hashable= require('./Hashable.js')

class IntHash extends Hashable
{
    #_integerValue;
    constructor(value)
    {
        super()
        if(Number.isInteger(value))
        {
             this.#_integerValue=value;
        }
        
    }

    get Value()
    {
        return this.#_integerValue;
    }

    equals(x)
    {
        let isEqual=false;
        if(x instanceof IntHash)
        {
            if(this.#_integerValue === x.Value)
            {
                isEqual=true;
            }
        }
        return isEqual;
    }

    hashVal()
    {
        return this.#_integerValue;
    }

    print()
    {
        console.log(this.#_integerValue);
    }
}
module.exports = IntHash;
