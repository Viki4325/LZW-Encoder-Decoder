// CLASS: HashTable
     //

     //
     // REMARKS: This class implements the HashTable as a data sturcture that can accept IntHash, stringHash and keyValueHash
     //
     //-----------------------------------------
'use strict'
let Hashable=require('./Hashable');
let LinkedList= require('./LinkedList.js')
class HashTable
{
    #_arrayOfll;
    constructor(size)
    {
        this.#_arrayOfll=new Array(size);
        this._size=size;
        this.arrayFillLinkedL();
    }

    /*This method just initializes all the array indeces with a lineked list*/
    arrayFillLinkedL() 
    {
        for(let i=0 ; i < this.#_arrayOfll.length ;i++ )
        {
            this.#_arrayOfll[i]=new LinkedList();
        }
    }
    
    /*This method determines the array position of the element x
    It does this by calling the hashVal() of element x and perform modulo length of array*/
    evaluatePosition(x)
    {
        let position=-1;
        if(x instanceof Hashable)
        {
            let hashCode=x.hashVal();
            position= hashCode%this._size;
        }
        return position;
    }

    /*Params: A hashable object x
     *This method adds it to the HashTable in the appropriate
     *position. This position is determined by the method evaluatePosition*/
    add(x)
    {
        //Only perform if there is space in the table
        if(x instanceof Hashable)
        {
            let position= this.evaluatePosition(x);
            this.#_arrayOfll[position].insert(x);
        }
        else
        {
            throw new Error("'add(x):' Only takes a Hashable object as parameter ")
        }
    }

    /*Params: A hashable object x
     *This method returns the first occurence equal to the parameter, or an error otherwise
     *It does not necessarily return what the parameter is, it returns the first
     *occurence equal to that 
     */
    get(x)
    {
        let target=null
        if(x instanceof Hashable)
        {
            let i=this.evaluatePosition(x);
            if(this.#_arrayOfll[i].search(x)!=null)
            {
                target=this.#_arrayOfll[i].search(x);
                //break;
            }else
            {
                throw new Error("Element trying to 'get' does not exist!!")
            }
        }
        else
        {
            throw new Error("'get(x):' Only takes a Hashable object as parameter")
        }
        return target;
    }

    /*Params: A hashable object
     *This method deletes one occurrence of an object equal to 
     *x in the hash table.*/
    remove(x)
    {
        let removed=false;
        if(x instanceof Hashable)
        {
            let i=this.evaluatePosition(x);
         
            if(this.#_arrayOfll[i].remove(x))
            {
                removed=true;
               
            }
        }
        else
        {
            throw new Error("'remove(x):' Only takes a Hashable object as parameter")
        }
        return removed;
    }

    /**Params: A hashable object
     * This method determines if the object x is in the hashTable
     * Returns true if found and false otherwise
     */
    contains(x)
    {
        let contains=false;
        if(x instanceof Hashable)
        {
            let i=this.evaluatePosition(x);
            if(this.#_arrayOfll[i].search(x)!=null)
            {
                contains=true;
                
            }
        }
        else
        {
            throw new Error("'contains(x):' Only takes a Hashable object as parameter");
        }
        return contains;
    }

    /**Determines if the hashTable is empty 
     * Returns true if empty and false otherwise
     */
    isEmpty()
    {
        let isEmpty=true;
        let i=0;
        while(i<this.#_arrayOfll.length)
        {
            if(this.#_arrayOfll[i].isEmpty()!=true)
            {
                isEmpty=false;
                break;
            }
            i++;
        }
        return isEmpty;
    }
    print()
    {
        for(let i=0; i < this.#_arrayOfll.length;i++)
        {
            this.#_arrayOfll[i].printList();
        }
    }

}

module.exports=HashTable;
