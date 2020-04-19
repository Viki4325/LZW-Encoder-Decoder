// CLASS: UnitTest
     //
 
     //
     // REMARKS: This class performs all the unit test for the hashtable data struture
     //
     //-----------------------------------------
let assert = require('assert');
let IntHash= require('./IntHash.js')
let StringHash= require('./StringHash.js')
let KeyValueHash= require('./KeyValueHash.js')
let HashTable= require('./HashTable.js')
'use strict'



function testAdd()
{
    console.log("Testing add...")
    let HT=new HashTable(10);
    let intHash1=new IntHash(3);
    let strHash1=new StringHash("Viki");
    let keyValue1=new KeyValueHash(strHash1,"Arsenal");
    
    assert(HT.isEmpty()==true);
    assert(HT.contains(intHash1)===false);
    HT.add(intHash1);
    assert(HT.isEmpty()===false);
    assert(HT.contains(intHash1)===true);
    HT.add(strHash1);
    HT.add(keyValue1);
    assert(HT.contains(strHash1)===true);
    assert(HT.contains(keyValue1)===true);
    //Testing to see if the add method accepts anything else rather than Hashable objects
    //Shouls give an error which will be caught in the catch part and then evaluate to true
    try {
        HT.add(5);
    } catch (error) {
        assert(error,"Actual:(No error)"+" Expected "+error);
    }

    console.log("TestAdd was successfull!!\n")
} 

function testGet()
{
    console.log("Testing get...")
    let HT1=new HashTable(5);
    let intHash2=new IntHash(7);
    let strHash2=new StringHash("Ayush");
    let keyValue2=new KeyValueHash(strHash2,"First Ocurrence");
    let keyValue3=new KeyValueHash(strHash2,"Second Occurrence");
    let notInserted=new StringHash("No insert");
    HT1.add(intHash2);
    HT1.add(strHash2);
    HT1.add(keyValue2);

    //Get items inserted and verify them
    assert(HT1.get(intHash2).Value===7);
    assert(HT1.get(strHash2).Value==="Ayush");
    assert(HT1.get(keyValue2).Value==="First Ocurrence");

    /*It's searching for the first object that's equal to the parameter
    Even though the 'keyValue3' is not added to the table */
    assert(HT1.get(keyValue3).Value==="First Ocurrence");

    /*It's searching for the first object that's equal to the parameter
    *It is possible that they are not the same objects, or even have the same contents*/
   HT1.add(keyValue3);
   assert(HT1.get(keyValue3).Value==="First Ocurrence")

   /*Get method does return the first occurence of the object equal to the parameter
   But does not remove it from the table*/
   assert(HT1.isEmpty()===false); 
   /*Get method does return the first occurence of the object equal to the parameter,
   but if does not exists then it throws an error */
    try {
        assert(HT1.get(notInserted))
    } 
    catch (error) {
        assert(error,"Actual:(No error)"+" Expected "+error);
    }
    /*Get method only accepts Hashable object as params*/
    try {
        assert(HT1.get(7));
    } catch (error) {
        assert(error,"Actual:(No error)"+" Expected "+error);
    }

    console.log("TestGet was successfull!!\n")
}

function testContains()
{
    console.log("Testing Contains...")
    let HT2=new HashTable(5);
    let intHash3=new IntHash(9);
    let strHash3=new StringHash("Harsh");
    let keyValue4=new KeyValueHash(strHash3,"First Ocurrence");
    let keyValue5=new KeyValueHash(strHash3,"Second Ocurrence");
    let strHash4=new StringHash("Ayush");

    HT2.add(intHash3);
    HT2.add(strHash3);
    HT2.add(keyValue4);

    //Those that should evaluate to true
    assert(HT2.contains(intHash3)===true);
    assert(HT2.contains(strHash3)===true);
    assert(HT2.contains(keyValue4)===true);
    //keyValue5 not added in the table, but should evaluate true because they have the same key with keyValueHash4
    assert(HT2.contains(keyValue5)===true);

    //those that evaluate to false
    assert(HT2.contains(strHash4)===false);

    /*contains method only accepts Hashable object as params*/
    try {
        assert(HT2.contains("Harsh"));
    } catch (error) {
        assert(error,"Actual:(No error)"+" Expected "+error);
    }

    console.log("TestContains was successfull!!\n")

}

function testRemove()
{
    console.log("Testing remove...")
    let HT3=new HashTable(5);
    let intHash4=new IntHash(10);
    let strHash4=new StringHash("Viki");
    let keyValue5=new KeyValueHash(strHash4,"First Ocurrence");
    let keyValue6=new KeyValueHash(strHash4,"Second Ocurrence");
    let strHash5=new StringHash("Covid-19");

    //trying to remove from an empty list
    assert(HT3.remove(intHash4)===false);

    HT3.add(intHash4);
    HT3.add(keyValue5);
    HT3.add(strHash5);

    //those that should evaluate to true
    assert(HT3.contains(strHash5)===true);
    assert(HT3.remove(strHash5)===true);
    assert(HT3.contains(strHash5)===false);

    assert(HT3.contains(intHash4)===true);
    assert(HT3.remove(intHash4)===true);
    assert(HT3.contains(intHash4)===false);

    assert(HT3.contains(keyValue5)===true);
    assert(HT3.remove(keyValue5)===true);
    assert(HT3.contains(keyValue5)===false);

    //since everything has been removed, it should be empty
    assert(HT3.isEmpty()===true);

    //trying to remove something that was never inserted
    assert(HT3.remove(strHash4)===false);

    /*If you have 2 keyValueHash object with the same key but different value
    Then when you call remove on one of them, then the first occurence is removed not both*/
    HT3.add(keyValue5);
    HT3.add(keyValue6);
    assert(HT3.remove(keyValue6)===true);
    //what remains in the list and what was removed?
    assert(HT3.contains(keyValue6)===true)
    assert(HT3.get(keyValue6).Value==="Second Ocurrence");
    assert(HT3.get(keyValue5).Value!=="First Ocurrence");
    assert(HT3.isEmpty()===false);
    

    /*remove method only accepts Hashable object as params*/
    try {
        assert(HT3.remove("Harsh"));
    } catch (error) {
        assert(error,"Actual:(No error)"+" Expected "+error);
    }

    console.log("TestContains was successfull!!\n")
}

function testIsEmpty()
{
    console.log("Testing isEmpty...")
   let HT4=new HashTable(2);
   assert(HT4.isEmpty()===true);
   let strHash6=new StringHash("pepsi")
   let keyValue6=new KeyValueHash(strHash6,"Second Ocurrence");

   HT4.add(keyValue6);
   assert(HT4.isEmpty()===false);
   assert(HT4.remove(keyValue6)===true);
   assert(HT4.isEmpty()===true);
   console.log("TestIsEmpty was successfull!!\n")
}
function Main()
{
    
    try {
        testAdd();
        testGet();
        testContains();
        testRemove();
        testIsEmpty();
        console.log("All tests passed successfully!!")
    } catch (error) {
        assert(error,"Actual:(No error)"+" Expected "+error);
    }
    
}

Main()
