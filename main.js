//--------------------------------------- 
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
