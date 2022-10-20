function chkEmail()
{
    let txt = document.getElementById("email").value
    if (txt.length > 0)
    {
        arr = Array.from(txt)
        // Check for "@""
        n = arr.indexOf("@")
        if(n < 0)
        {
            alert("Falta especificar '@'")
        }
        else
        {
            // Check for "." despues de "@"
            if (arr.indexOf(".", n) < 0)
            {
                alert("Falta al menos un '.' luego de la '@'")
            }
            else
            {
                for (i = 0; i < arr.length; i++)
                {
                    ch = arr[i]
                    if ( !( ('a' <= ch && ch <= 'z') ||
                            ('A' <= ch && ch <= 'Z') ||
                            ('0' <= ch && ch <= '9') ||
                            (ch == '.') || (ch == '@') ) )
                    {
                        alert("Caracter '" + ch + "' invalido")
                        break
                    }
                }
            }
        }
    }
}

// document.getElementById("email").addEventListener("onChange()", chkEmail())

let hd = `
<div class="patitos animate__animated animate__backInLeft">
<a>Los 2 Patitos</a>
</div>
<nav class="navbar navbar-expand-sm bg-light">
<div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" 
            data-bs-toggle="collapse" data-bs-target="#n_bar" 
            aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse h5" id="n_bar">
        <ul class="navbar-nav">
            <li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>
            <li class="nav-item active"><a class="nav-link" href="beauty.html">Beauty</a></li>
            <li class="nav-item active"><a class="nav-link" href="alimentos.html">Alimentación</a></li>
            <li class="nav-item active"><a class="nav-link" href="servicios.html">Servicios</a></li>
            <li class="nav-item active"><a class="nav-link" href="contacto.html">Contacto</a></li>
        </ul>
    </div>
    <div id="Jokes"><strong>{{joke}}</strong></div>
</div>
</nav>
`

document.getElementById("jsHeader").innerHTML = hd

let ft = `
<div class="row text-center p-4 bg-light">
    <div class="col-md-8 footer-brand animated fadeInLeft">
        <p><b>Av. de los Patitos 222 - Capital Federal - Tels (222) 2222-2222</b></p>
    </div>
    <div class="col-md-4 footer-social animated fadeInDown">
        <ul>
            <a href="https://facebook.com"><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
            <a href="https://instagram.com"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
            <a href="https://twitter.com/?lang=es"><i class="fa-brands fa-twitter fa-2xl"></i></a>
            <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp fa-2xl"></i></a>
        </ul>
    </div>
</div>
`
document.getElementById("jsFooter").innerHTML = ft

const url = "https://v2.jokeapi.dev/joke/Programming?lang=es&type=single"
let app = new Vue({
    el: '#Jokes',
    data: {
        joke: {}
    },
    created() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.info = data;
            this.joke = data.joke;
        })
        .catch(error => console.log(error));
    }
})