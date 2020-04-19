// CLASS: Encoder
     //

     //
     // REMARKS: This class implements the Encoder which uses dictionary.
     //
     //-----------------------------------------
'use strict'
let Dictionary=require('./Dictionary.js')
let StringHash=require('./StringHash.js')
let fs = require('fs');

class Encoder
{   

    constructor(fileName)
    {
        this.initializeDict()
        this._fileName=fileName;
    }

    /**All the ASCII characters with values frm 32 to 126 are encoded
     * as their ASCII value minus 32
     */
    initializeDict()
    {
        this._dictionary=new Dictionary();
        for(let i=32; i<=126; i++)
        {
            let hashableObj=new StringHash(String.fromCharCode(i))
            this._dictionary.put(hashableObj,(i-32));
        }
       
    }

    /**This method opens a output file with the same name as the file passed as by the user
     * It also reads the file the user passes
     * Performs the LZW encoding algorithm on the content of the file
     */
    encode()
    {
        this.thefile = this._fileName + ".lzw";
        fs.writeFileSync(this.thefile,"");
        this.contents=fs.readFileSync(this._fileName,"utf-8");
        this.contents= this.contents.split("");
    

        this.i=1;
        this.newEncoding=95;
        this.curr_key=this.contents[0];
        this.currKeyObj=new StringHash(this.curr_key);
        this.output=0

        while(this._dictionary.contains(this.currKeyObj) && this.i<=this.contents.length)
        {
            
            this.last_key=this.curr_key;
            //take the next char from the file
            this.curr_key += this.contents[this.i];
            this.temp=this.curr_key;
        
            this.currKeyObj=new StringHash(this.curr_key);
            
            //Add the current key to the dictionary with the new Encoding if the current key does not exist
            if(!this._dictionary.contains(this.currKeyObj))
            {
                this._dictionary.put(this.currKeyObj,this.newEncoding);
            }
            //If it does exist, then take the next char from the file and update everything related to it
            //In this case, the last_key becomes the currentKey that we knew that it existed in the dict
            else
            {
                this.curr_key+=this.contents[this.i+1];
                this.last_key=this.temp;
                this.currKeyObj=new StringHash(this.curr_key);
                this._dictionary.put(this.currKeyObj,this.newEncoding);
                this.i++;
            }
        
            this.lastKeyObj=new StringHash(this.last_key);
            this.output=this._dictionary.get(this.lastKeyObj);

          
            fs.appendFileSync(this.thefile,this.output+" "); 

            this.curr_key=this.curr_key.charAt(this.curr_key.length-1);
            this.newEncoding++;
            this.i++;
        }
        //When the while loop fails(That is at the end) then put a -1 to the end of the file
        fs.appendFileSync(this.thefile,-1); 
    }
    
}
module.exports=Encoder;
