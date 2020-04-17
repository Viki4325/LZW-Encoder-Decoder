//-----------------------------------------
     // NAME		: Makadia Viki Suresh 
     // STUDENT NUMBER	: 7870989
     // COURSE		: COMP 2150
     // INSTRUCTOR	: Mike Domaratzki
     // ASSIGNMENT	: assignment 4
     // QUESTION	: question 2      
     // 
     // REMARKS: This class, takes file name through command line argument and passes this file name to
     //         the encoder object created here.
     //
     //
//-----------------------------------------

let Encoder=require('./Encoder.js')

function main()
{

    let encoder=new Encoder(process.argv[2]);
    encoder.encode();

}

main();