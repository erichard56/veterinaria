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
