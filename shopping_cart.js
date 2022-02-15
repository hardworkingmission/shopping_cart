


//getElement
function getElement(inputId){
    return document.getElementById(inputId)
}

//updateQuantity
function updateQuantity(prevQuantity,task){

    if(task=='+'){
        return parseInt(prevQuantity)<5? parseInt(prevQuantity)+1:parseInt(prevQuantity)
    }else if(task=='-'){
        return parseInt(prevQuantity)>0? parseInt(prevQuantity)-1:parseInt(prevQuantity)
    }
}
//updatePrice
function updatePrice(productQuantity,product){
    console.log("update")
    const products={honey:20,laptop:1200,phone:1100}
    if(product=='honney'){
        return productQuantity*products.honey
    }else if(product=='phone'){
        return productQuantity*products.phone
    }else if(product=='laptop'){
        return productQuantity*products.laptop
    }
}
//updateTotalWithoutDeliveryFee
function updateTotalWithoutDeliveryFee(){
    const products={honey:20,laptop:1200,phone:1100}
    return products.honey*parseInt(getElement('honney-quantity').value)+products.phone*parseInt(getElement('phone-quantity').value)+products.laptop*parseInt(getElement('laptop-quantity').value)

}

//eventHandle()


function buttonEventHandle(buttonId,task,quantityId,product,priceId){
    getElement(buttonId).addEventListener('click',()=>{
            const productQuantity=getElement(quantityId).value
            getElement(quantityId).value=updateQuantity(productQuantity,task)
            getElement(priceId).innerText=updatePrice(updateQuantity(productQuantity,task),product)
            getElement('total-summary-quantity').innerText=updateTotalWithoutDeliveryFee()
        
        
    })


}

//for honney
buttonEventHandle('honney-quantity-plus','+','honney-quantity','honney','total-honney-price')
buttonEventHandle('honney-quantity-minus','-','honney-quantity','honney','total-honney-price')
//for honney
buttonEventHandle('phone-quantity-plus','+','phone-quantity','phone','total-phone-price')
buttonEventHandle('phone-quantity-minus','-','phone-quantity','phone','total-phone-price')
//for honney
buttonEventHandle('laptop-quantity-plus','+','laptop-quantity','laptop','total-laptop-price')
buttonEventHandle('laptop-quantity-minus','-','laptop-quantity','laptop','total-laptop-price')

//selector option
getElement('shipping').addEventListener('change',(event)=>{
    getElement('total-cost').innerText=updateTotalWithoutDeliveryFee()+parseFloat(event.target.value)

})
//apply premo code
getElement('apply-button').addEventListener('click',()=>{
    const premoCode=getElement('premo-code').value.toLowerCase()
    let promoCode=[]
    if(premoCode=='premo-22'){
        
        if(promoCode.indexOf(premoCode)!==-1){
            alert('You have already used the code')
            return 1
        }else{
            
            getElement('total-cost').innerText=parseFloat(getElement('total-cost').innerText)+5
            promoCode.push(premoCode)

        }   

    }
})