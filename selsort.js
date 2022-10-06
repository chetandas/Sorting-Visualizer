async function selsort(){
    console.log("inside the selsort func");//printing in the console when the function is called... as a professional thing to do...
    const elem=document.querySelectorAll(".bar");// select all the bar using queryselectorall which inturn returns an array of bars...
    for(let i=0;i<elem.length;i++)// selection sort logic...
    {
        console.log("in outer loop");
        for(let j=i+1;j<elem.length;j++)
        {
            console.log("in inner loop");
            elem[i].style.background='blue';// choose the two bars which we need to compare...
            elem[j].style.background='red';// these css proerties are in string format...
            // await waitforme(delay);
            if(parseInt(elem[i].style.height)>parseInt(elem[j].style.height)){// parseint is used to convert the string into numeric value...
                await waitforme(delay);
                swap(elem[i],elem[j]);// if condition is satisfied call swap function...
            }
            elem[i].style.background='cyan';// after swapping is done make ith index as cyan and as well as jth index as cyan...
            elem[j].style.background='cyan';
        }
        elem[i].style.background='green';//in selsort after the completion of inner loop starting from the 1st index the element gets its sorted position.... ex after 1st iteration of outer loop 1st pos is sorted nd after 2nd iteration of outer loop the 2nd pos is sorted and so on...
    }
}
const selsortbtn=document.querySelector("#selsort");
selsortbtn.addEventListener('click',async function(){// if the user clicks on selection sort button.. then add a event listener for the following tasks..
    disablenewarraybtn();//disable the newarray button....
    disableSortingBtn();//disables all the sorting buttons...
    disableSizeSlider();//disable the sizerangeslider....
    await selsort();// after disabling wait until the selectionsort function executes the program...
    enablenewarraybtn();// after the execution is done enable all the buttons again....
    enableSortingBtn();
    enableSizeSlider();
})
