// CLASS: StringHash
     //
     // Author: Makadia Viki Suresh, 7870989
     //
     // REMARKS: This class implements the StringHash and this is a subclass of Hashable
     //
     //-----------------------------------------
'use strict'
let Hashable= require('./Hashable.js')
class StringHash extends Hashable
{
    #_stringValue;
    constructor(x)
    {
        super();
       this.#_stringValue=x;        
    }

    hashVal()
    {
        let hashCode=0;
        let p=31;
        for(let i=0;i < this.#_stringValue.length; i++)
        {
            hashCode+= (this.#_stringValue.charCodeAt(i))*(Math.pow(p,(this.#_stringValue.length-(i+1))))
        }
        return hashCode;
    }
    get Value()
    {
        return this.#_stringValue;
    }

    equals(x)
    {
        let isEqual=false;
        if(x instanceof StringHash)
        {
            if(this.#_stringValue===(x.Value))
            {
                isEqual=true;
            }
        }
        return isEqual;
    }

    print()
    {
        console.log(this.#_stringValue);
    }
}
module.exports=StringHash