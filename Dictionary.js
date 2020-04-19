// CLASS: Dictionary
     //
     //
     // REMARKS: This class implements the dictionary as a data sturcture using the hash table 
     //
     //-----------------------------------------
'use strict'
let HashTable=require('./HashTable.js');
let Hashable=require('./Hashable.js')
let KeyValueHash= require('./KeyValueHash.js')
class Dictionary
{
    constructor()
    {
        this._hashTable=new HashTable(1000);
    }

    /**Params: Takes a Hashable key(IntHash or stringHash) and a value v. 
     *Adds this keyValue pair to the dictionary, if there is no other pair with the same key,
     If there exists another pair with the same key, the already existing pair's value is updated 
     with the value v passed as the param.
     Return: There is no return for this method */
    put(k,v)
    {
        if(k instanceof Hashable)
        {
            //make an instance of keyValueHash object
            let newPair=new KeyValueHash(k,v);
            //this pair does not exist in the Dictionary
            if(this._hashTable.contains(newPair)==false)
            {
                this._hashTable.add(newPair);
            }
            else
            {//replace the value with new value passed.

                let pairFound=this._hashTable.get(newPair);
                //set the old value with the new one
                pairFound.Value=v;
            }
        }
    }

    /**Param: Takes in a hashable key k
     * Return: It returns the value associated with the key k , if a keyValue pair with key k
     * is found, otherwise throuw an error
     * This uses the hashTable's get method
     */
    get(k)
    {
        let value;
        if(k instanceof Hashable)
        {
            //we can make a keyValueHash pair object, with the key given,k, but the value can be anything
            //since comparison after all depends on the key and not the value
            let comparator=new KeyValueHash(k,-1);
            if(this._hashTable.contains(comparator))
            {//if the key exists in the hashTable
                value=this._hashTable.get(comparator).Value;
            }
            else
            {
                throw new Error("Key-Value pair trying to 'get' does not exist!!")
            }
        }
        return value
    }

    /**Params: Takes a hashable key x
     * Returns: A boolean value, true -> there exists a keyValue pair with key x
     *                           false -> a keyValue pair with key does not exist
     * This method also uses the HashTable's contains method
     */
    contains(x)
    {
        if(x instanceof Hashable)
        {
            let comparator=new KeyValueHash(x,-1);
            return this._hashTable.contains(comparator);
        }
    }

    /**No params
     * Returns a boolean value, true -> if the dictionary is empty
     *                          false-> if the dictionary is not empty
     * This method also uses the hashTable's isEmpty method
     */
    isEmpty()
    {
        return this._hashTable.isEmpty();
    }

    print()
    {
        this._hashTable.print();
    }
}
module.exports=Dictionary;
