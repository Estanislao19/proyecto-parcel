const e=document.getElementById("app"),t=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"//me va a traer del producto 0 al 10
)//va almacenar la respuesta una vez que sea cumplida
,a=await t.json(),s=a?.map(e=>`
       <article class="Card">
        <img src="${e.images[0]}">
        <h2>
        ${e.title} <small>Precio $ ${e.price}</small>
        </h2>       
       </article> 
    `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=s,e.appendChild(i)};t();//# sourceMappingURL=index.5d0aaa34.js.map

//# sourceMappingURL=index.5d0aaa34.js.map
