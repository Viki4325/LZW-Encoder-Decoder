// CLASS: Node
     //

     //
     // REMARKS: This class implements the node and used within LinkedList
     //
     //-----------------------------------------
'use strict'
class Node
{
    
    constructor(data)
    {
        this._data=data;
        this._next=null;
    }

    get data()
    {
        return this._data;
    }

    get next()
    {
        return this._next;
    }
    set next(nextNode)
    {
        this._next=nextNode;
    }
    
}

module.exports=Node;
