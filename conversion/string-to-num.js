const userinput="42"//As string
const numberInput=Number(userinput)//changed string to number

if(!isNaN(numberInput))
{
    console.log(numberInput+8)
}
else{
    console.log("Invalid Input")
}