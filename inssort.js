async function inssort(){
    console.log("inside insertion sort func");//printing in the console when the function is called... as a professional thing to do...
    const elem=document.querySelectorAll(".bar");// select all the bar using queryselectorall which inturn returns an array of bars...
    let j;
    let temp;
    for(let i=1;i<elem.length;i++)
    {
        j=i-1;
        temp=elem[i].style.height;
        // elem[i].style.background='blue';
        await waitforme(delay);
        while(j>=0 && (parseInt(elem[j].style.height))>(parseInt(temp)))
        {
            elem[j].style.background='blue';
            await waitforme(delay);
            elem[j+1].style.height=elem[j].style.height;
            await waitforme(delay);
            elem[j+1].style.background='green';
            j--;
        }
        elem[j+1].style.height=temp;
        elem[j+1].style.background='green';
    }
}
const inssortbtn=document.querySelector("#inssort");// if the user clicks on insertion sort button...then add a event listener for the following tasks...
inssortbtn.addEventListener('click',async function(){
    disableSortingBtn();//disables all the sorting buttons...
    disableSizeSlider();//disable the sizerangeslider....
    disablenewarraybtn();//disable the newarray button....
    await inssort();// after disabling wait until the bubblesort function executes the program...
    enableSizeSlider();// after the execution is done enable all the buttons again....
    enableSortingBtn();
    enablenewarraybtn();
})