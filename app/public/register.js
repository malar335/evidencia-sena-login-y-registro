document.getElementById("register-form").addEventListener("submit",async(e)=>{
    e.preventDefault(); /*previene lo que hce por defecto un formulario*/
console.log(e.target.children.user.value) /*valor que tiene el user que es el hijo del formulario*//*(e) es el evento*/
const res = await fetch("http://localhost:4000/api/register",{/*comunicación con el backend para hacer el registro)*/
    method:"POST" , /*metodo de opciones. "POST" para comunicarnos con el backend*/
    headers: {
        "Content-Type" :"application/json" 
    },
    body: JSON.stringify({ /*el body solo debe tener texto */
        user: e.target.children.user.value,
        email: e.target.children.email.value,
        password:e.target.children.password.value

    })
});
})