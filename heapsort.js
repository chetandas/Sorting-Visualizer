async function heapify(elem,n){
    let c;
    let p;
    let i;
    let j;
    for(i=0;i<n;i++)
    {
        c=i;
        elem[c].style.background='red';
        for(j=0;j<n;j++)
        {
            p=Math.floor((c-1)/2);
            while(p>=0 &&(parseInt(elem[p].style.height))<(parseInt(elem[c].style.height)))
            {
                await waitforme(delay);
                swap(elem[p],elem[c]);
                elem[p].style.background='green';
                elem[c].style.background='green';
                c=p;
                elem[c].style.background='yellow';
                p=Math.floor((c-1)/2);
                // elem[p].style.background='pink';
            }
        }

    }
}
async function delheap(elem,n){
    let e=n-1;
    while(e>0)
    {
        await waitforme(delay);
        swap(elem[0],elem[e]);
        elem[e].style.background='green';
        await heapify(elem,e);
        e--;
    }
    elem[0].style.background='green';
}
async function heapsort(elem,n){
    await heapify(elem,n);
    await delheap(elem,n);
}
const heapsortbtn=document.querySelector("#heapsort");
heapsortbtn.addEventListener('click',async function(){
    let elem=document.querySelectorAll(".bar");
    let n=elem.length;
    disableSortingBtn();//disables all the sorting buttons...
    disableSizeSlider();//disable the sizerangeslider....
    disablenewarraybtn();//disable the newarray button....
    await heapsort(elem,n);
    enableSizeSlider();// after the execution is done enable all the buttons again....
    enableSortingBtn();
    enablenewarraybtn();  
})