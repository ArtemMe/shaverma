const countProduct = (list)=>{
    let counter = 0;
    let counter_iter = 0;
    let prev_id;
    console.log(list);
    if(list.length !==0){
        prev_id = list[0].id;
    }else{
        list = [];
    }

    const list_shava = [];

    list.map(item =>{
        if(item.id === prev_id){
            counter++;
            prev_id=item.id;
        }else{
            list_shava.push({counter,shava_info:list[counter_iter-1]});
            counter=1
            prev_id = item.id;
        }

        counter_iter++;

        if(counter_iter===list.length){
            console.log(list[counter_iter-1]);
            list_shava.push({counter,shava_info:list[counter_iter-1]});
            counter=0;
            prev_id = item.id;
        }
    });

    return list_shava;
}

const cleanCart = () => {
    localStorage.removeItem("cart");
}

const getSortedProductList = () =>{
    let list = JSON.parse(localStorage.getItem("cart"));
    if(list !== null){
        console.log("list_>")
        console.log(list);
        list.sort((item1,item2)=>{return (item1.id-item2.id)});
        return list;
    }
    return [];
}
export {countProduct, cleanCart, getSortedProductList}