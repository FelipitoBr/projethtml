var nbImg = 0

function deplacer(elementImg)
{
    panier = document.getElementById("choisi")
    vitrine = document.getElementById("dispo")
    fatherLI= elementImg.parentElement
    
    if(elementImg.closest("#dispo"))
    {
        panier.appendChild(elementImg)
        
        varspan = document.createElement('span');
        
        text = document.createTextNode("Album "+elementImg.alt+" ")
        

        varspan.appendChild(text)
        varspan.style.color="white"
        varspan.style.fontSize="20px"
        varspan.style.marginLeft="20%"
        panier.appendChild(varspan)

        panier.insertBefore(varspan, elementImg)
        nbImg++
    }else
    {
        fatherLI.removeChild(elementImg.previousSibling)
        vitrine.appendChild(elementImg)
        nbImg--
    }
    document.getElementById('prix').innerHTML="Montant du panier : "+nbImg*7.5+"€"
}

function popupForm()
{
    if(nbImg == 0)
    {
        alert("please select any album first")
    }
    else
    {
        formId=document.getElementById("purchaseNotif")
        pos = document.getElementById("purchaseNotif")
        formId.style.display="block"
        
        formId.style.position="relative"    


        formId.style.top="-600px"
    }
}
function cancelPurchase()
{
    formId=document.getElementById("purchaseNotif")
    formId.style.display="none"

}

