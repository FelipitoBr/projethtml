diqueDispo =[1,2,3]
prix = 0
function achat(albumSource, disqueIndex)
{
    if(diqueDispo[disqueIndex] != 0)
    {
        diqueDispo[disqueIndex] = 0
        
        currentDiv = document.getElementById("choisi")

        newDiv = document.createElement("div")
        newDiv.id = "div"+albumSource.alr
        album = document.createElement('img')
        
        album.src = albumSource.src

        album.width = albumSource.width
        
        album.height = albumSource.height
        
        album.style.marginLeft="30%"
        album.style.border="solid 2px black"
        album.id=albumSource.alt

        newDiv.appendChild(album)
                

        h2 = document.createElement('h2')
        textNode = document.createTextNode(albumSource.alt)
        h2.appendChild(textNode)
        newDiv.appendChild(h2)
        h2.style.color="white"
        h2.style.marginLeft="30%"
        prix+=7.50
        phrasePrix= document.getElementById("prix")
        phrasePrix.innerHTML="Montant du panier : "+prix+"€"
        currentDiv.appendChild(newDiv)
        newDiv.addEventListener('click',function(){ retourner(newDiv,phrasePrix,disqueIndex)})


    }
    
}

function retourner(disqueRmv,phPrix,indice)
{
    currentDiv=document.getElementById("choisi")
    currentDiv.removeChild(disqueRmv)
    diqueDispo[indice]=indice+1
    prix-=7.5
    phPrix.innerHTML="Montant du panier : "+prix+"€"

}