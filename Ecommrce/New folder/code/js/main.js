// ===================open c=and close menu==================
  var cart = document.querySelector('.cart');
  //funcyion open
  function open_cart(){
    cart.classList.add('active');
  }

  //function close
  function close_cart(){
    cart.classList.remove('active');
  }
/**---------------------------------------- */
//=========================================
//==================================add item in cart
//1-add in item-home(step1)
//2,3,4, in this page
//5-in page=>items-home
//-in this page

//======================================
//2-add item in cart step2(step2)
var all_products_json;
var item_in_cart=document.querySelector(".item_in_cart");
//3-add in item(step3)  =>make array
let produt_cart=[];
//-(step4)function
function addToCart(id,btn){
produt_cart.push(all_products_json[id])
btn.classList.add('active')
console.log(produt_cart);
getCartItems()
}
//===================================================
//to make cart increase all pricewhen chease  product
//-1-add count,price,

//=====-----------(step1)=>to make cart increase all pricewhen chease  product
let count_item = document.querySelector('.count_item');
let count_item_cart= document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');
let price_cart_Head =document.querySelector('.price_cart_Head');
//=======================================
//add to cart (step6)
function getCartItems(){

//----step2:>== to make cart increase all pricewhen chease  product
let total_price=0;

//-----------------
//anther part 6in step6 in add to cart
  let item_c="";
  for(let i=0; i<produt_cart.length; i++){
    item_c +=    
    /**cart */
    `
    <div class="item_cart">
    <img src="${produt_cart[i].img}" alt="">
        <div class="contant">
        <h4>${produt_cart[i].name}</h4>
        <p  class="price_cart">${produt_cart[i].price}</p>
        </div>
<button onclick ="remove_from_cart(${i})" class="delet_item"><i class="fa-solid fa-trash-can"></i></button>
</div> `
//----step3:>==to make cart increase all pricewhen chease  product
//-add all sum price to all proudact
total_price += produt_cart[i].price

  }
  
  item_in_cart.innerHTML =item_c

  //----step4:>==to make cart increase all pricewhen chease  product
 //-print price
 price_cart_Head.innerHTML="$"+total_price
 //add number increase in circule
 count_item.innerHTML = produt_cart.length

 count_item_cart.innerHTML =  `(${produt_cart.length} Item in Cart)`;
 price_cart_total.innerHTML = "$"+total_price
}
/**//////////end and to cart///////// */

//======================================
//-after add cart can=========>deleted
//=============================
//1-step1==>make function to remove
//2-step2 =>in this page mak =>onclick in function (addToCart)in btn delete
//3- step3==> add function in file=---item-home

//===============================
//(step3)=>this is  function remove active from all button, 
//-see button that click it and add it active to this only

function remove_from_cart(index) {
  produt_cart.splice(index, 1)// إزالة المنتج من المصفوفة
  getCartItems() // تحديث عرض السلة

  let addToCartButton = document.querySelectorAll(".fa-cart-plus");
  
  for (let i = 0; i < addToCartButton.length; i++) {
      addToCartButton[i].classList.remove("active") // إزالة التفعيل من كل الأزرار
  

  // إعادة تفعيل الزر للمنتجات الموجودة في السلة فقط
  produt_cart.forEach(prouduct => {
      addToCartButton.forEach((btn, index) => {
          if (prouduct.id == i) {
              addToCartButton[i].classList.add("active");
          }
      
  })
})}
}


/**************************** */
//button back to top

let back_to_top = document.querySelector(".back_to_top")

back_to_top.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

/*-------------------item image----------------- */


//change item image

let bigImage = document.getElementById("bigImg");

function ChangeItemImage(img) {
    bigImage.src = img
}
/*********************** */



// document.addEventListener("DOMContentLoaded", function () {
//   const signupForm = document.querySelector(".form");

//   signupForm.addEventListener("submit", function (event) {
//       event.preventDefault(); // منع إعادة تحميل الصفحة

//       let name = signupForm.querySelector('input[type="text"]').value.trim();
//       let email = signupForm.querySelector('input[type="email"]').value.trim();
//       let password = signupForm.querySelectorAll('input[type="password"]')[0].value.trim();
//       let confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value.trim();

//       if (name === "" || email === "" || password === "" || confirmPassword === "") {
//           alert("جميع الحقول مطلوبة!");
//           return;
//       }

//       if (password !== confirmPassword) {
//           alert("كلمة المرور غير متطابقة!");
//           return;
//       }

//       // التحقق من وجود المستخدم مسبقًا
//       if (localStorage.getItem(email)) {
//           alert("هذا البريد الإلكتروني مسجل بالفعل! يرجى تسجيل الدخول.");
//           return;
//       }

//       // حفظ بيانات المستخدم في Local Storage
//       localStorage.setItem(email, JSON.stringify({ name, email, password }));

//       alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
//       window.location.href = "login.html"; // تحويل المستخدم لصفحة تسجيل الدخول
//   });
// });




// /****login */
// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.querySelector(".form");

//   if (!loginForm) {
//       console.error("❌ لم يتم العثور على الفورم! تأكد من وجوده في HTML.");
//       return;
//   }

//   loginForm.addEventListener("submit", function (event) {
//       event.preventDefault();

//       let email = loginForm.querySelector('input[type="email"]').value.trim();
//       let password = loginForm.querySelector('input[type="password"]').value.trim();

//       if (email === "" || password === "") {
//           alert("يرجى إدخال البريد الإلكتروني وكلمة المرور!");
//           return;
//       }

//       let userData = localStorage.getItem(email);

//       if (!userData) {
//           alert("هذا البريد الإلكتروني غير مسجل! يرجى التسجيل أولاً.");
//           return;
//       }

//       userData = JSON.parse(userData);

//       if (userData.password !== password) {
//           alert("كلمة المرور غير صحيحة!");
//           return;
//       }

//       localStorage.setItem("loggedInUser", email);
//       alert("تم تسجيل الدخول بنجاح!");
//       console.log("✅ تم تسجيل الدخول، التوجيه إلى index.html");

//       window.location.href = "index.html";
//   });
// });


// /***index */
// document.addEventListener("DOMContentLoaded", function () {
//   let loggedInUser = localStorage.getItem("loggedInUser");

//   if (!loggedInUser) {
//       alert("يجب عليك تسجيل الدخول أولاً!");
//       window.location.href = "login.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول
//   }
// });
