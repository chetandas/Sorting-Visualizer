async function partition(elem,l,h){// partition function of quicksort...
    let strt=l;
    let index=l;
    let end=h;
    let pivot=parseInt(elem[h].style.height);
    elem[h].style.background='red';
    for(let i=strt;i<end;i++)
    {
        elem[i].style.background='yellow';
        elem[index].style.background='orange';
        if(parseInt(elem[i].style.height)<pivot){
            await waitforme(delay);
            swap(elem[i],elem[index]);
            // elem[i].style.background='green';
            elem[index].style.background='green';
            index++;
        }
    }
    await waitforme(delay);
    swap(elem[index],elem[end]);
    elem[index].style.background='green';
    elem[h].style.background='green';
    return index;
}
async function quicksort(elem,l,h){
    if(l<h){
        let mid=await partition(elem,l,h);
        await quicksort(elem,l,mid-1);
        await quicksort(elem,mid+1,h);
    }
}
const quicksortbtn=document.querySelector("#quicksort");
quicksortbtn.addEventListener('click',async function(){
    let elem=document.querySelectorAll(".bar");
    let l=0;
    let h=(elem.length)-1;
    disableSortingBtn();//disables all the sorting buttons...
    disableSizeSlider();//disable the sizerangeslider....
    disablenewarraybtn();//disable the newarray button....
    await quicksort(elem,l,h);// after disabling wait until the bubblesort function executes the program...
    enableSizeSlider();// after the execution is done enable all the buttons again....
    enableSortingBtn();
    enablenewarraybtn();
})
