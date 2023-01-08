const wrapper= document.querySelector(".sliderWrapper")

const Menuitems = document.querySelectorAll(".menuItem")
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct =products[0]

const currentProductImg =document.querySelector(".productImg")
const currentProductName =document.querySelector(".productName")
const currentProductPrice =document.querySelector(".productPrice")
const currentProductDesc =document.querySelector(".productDesc")
const currentProductColor =document.querySelectorAll(".color")
const currentProductSize =document.querySelectorAll(".size")


Menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translateX(-${100*index}vw)`;

        //change the choosen product
        choosenProduct =products[index]

        //change text of currentproduct
        currentProductName.textContent=`${choosenProduct.title}`
        currentProductPrice.textContent=`$${choosenProduct.price}`
        currentProductImg.src= `${choosenProduct.colors[0].img}`
        
        //assigning new colors
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = `${choosenProduct.colors[index].code}`
        })
    })  
})

currentProductColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=`${choosenProduct.colors[index].img}`
    })
}) 
currentProductSize.forEach(size =>{
  size.addEventListener("click",()=>{
    //when we are clikcing it will first reset its background color then give color
    currentProductSize.forEach(size=>{
      size.style.backgroundColor="white";
      size.style.color="red";
    })

    size.style.backgroundColor="black";
    size.style.color="white";
  })
})

const buyButton =document.querySelector(".buyProduct")
const cancel =document.querySelector(".cancel")
const payment=document.querySelector(".payment")

buyButton.addEventListener("click",()=>{
  payment.style.display="flex";
})
cancel.addEventListener("click",()=>{
  payment.style.display="none";
})


 




    