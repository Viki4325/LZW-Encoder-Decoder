// CLASS: LinkedList
     //

     //
     // REMARKS: This class implements the LinekedList and this is the underlying data structure
     //
     //-----------------------------------------
'use strict'

 let Node= require('./Node.js')
 let Hashable=require('./Hashable.js')
 class LinkedList
 {
    #_head;
    #_size;
     
    constructor()
    {
        this.#_head=null;
        this.#_size=0;
    }

    insert(element)
    {
        //check that only a hashable item enters
        //'equals' in element && 'hashVal' in element && typeof(element.equals)=='function' && typeof(element.hashVal)=='function')
        if(element instanceof Hashable)
        {
            let node=new Node(element);
            let curr;

            //if list is empty add the element and make it head
            if(this.#_head == null)
            {
                this.#_head=node;
            }else
            {
                curr=this.#_head;

                //iterate till the end of the list
                while(curr.next)
                {
                    curr=curr.next;
                }
                //add node
                curr.next=node;
            }
            this.#_size++;
        }
    }

    isEmpty()
    {
        return this.#_size==0;
    }

    search(x)
    {
        let value=null;
        if(x instanceof Hashable)
        {
            let curr=this.#_head;
            while(curr!=null)
            {
                if(curr.data.equals(x)==true)
                {
                    value=curr.data;
                   
                    break;
                }
                else
                {
                    curr=curr.next;
                }
            }
        }
        return value;
    }

    remove(x)
    {
        let removed=false;
        if(x instanceof Hashable)
        {
            let curr=this.#_head;
            let prev=null;

            //iterate over the list
            while(curr!=null)
            {
                if(curr.data.equals(x)==true)
                {
                    if(prev==null)
                    {
                        this.#_head=curr.next;
                        
                    }
                    else
                    {
                        //set prev's next node to be the curr's next
                        prev.next=curr.next;
                        
                    }
                    this.#_size--;
                    removed=true;
                    break;
                }
                prev=curr;
                curr=curr.next;
            }
        }
        return removed;
    }
    // prints the list items 
    printList() 
    { 
        let curr = this.#_head; 
        let str = "[ "; 
        while (curr!=null) { 
            str += curr.data.Value+ ", "; //.Value 
            curr = curr.next; 
        } 
        str+="]"
        console.log(str); 
    } 
}
module.exports=LinkedList;
