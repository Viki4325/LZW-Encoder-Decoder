// CLASS: KeyValueHash
     //
     //
     // REMARKS: This class implements the keyValueHash and this is a subclass of Hashable. It is like a pair of a key and a value where the 
     //             key must be of either type IntHash or StringHash 
     //
     //-----------------------------------------
'use strict'
let Hashable=require('./Hashable.js')
class KeyValueHash extends Hashable
{
    constructor(key,val) 
    {
        super();
        //check if the key is hashable
        if(key instanceof Hashable)
        {
            this._key=key;
            this._value=val;
        }
        else
        {
            throw new Error("Key must be of type Hashable!!");
        }
        
    }

    hashVal()
    {//hashVal of this pair is for hashVal of the key
        return this._key.hashVal();
    }

    get key()
    {
        return this._key;
    }
    get Value()
    {
        return this._value;
    }
    set Value(v)
    {
        this._value=v;
    }

    equals(x)
    {//Equal if the key is the same
        let isEqual=false;
        if(x instanceof KeyValueHash)
        {
            if(this._key.equals(x.key))
            {
                isEqual=true;
            }
        }
        return isEqual;
    }

    print()
    {
        console.log("key:"+this._key.print()+"Value:"+this._value+"");
    }
}
module.exports=KeyValueHash;
