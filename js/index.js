var transactions = [
    {
        title: "Lacoste - Barra Shopping",
        price: 25000,
        currency: "BRL",
        type: "saída",
        category: "venda",
        date: "13/08/2021"
    },
    {
        title: "PIX recebido",
        price: 7500,
        currency: "BRL",
        type: "entrada",
        category: "Transferência",
        date: "13/08/2021"
    }
]

{/*
    <tr>
        <td>Lacoste - Barra Shopping</td>
        <td>R$ 25.000,00</td>
        <td class="red"><i data-feather="dollar-sign"></i> Venda</td>
        <td>13/08/2021</td>
    </tr>
*/}
var table = document.querySelector("#table tbody");

transactions.map(transaction => {
    var row = document.createElement("tr");

    var title = document.createElement("td");
    title.append(transaction.title);

    var price = document.createElement("td");
    var value = moneyFormat(transaction.currency, transaction.price)
    price.append(value);
    
    var category = document.createElement("td");
    category.append(transaction.category); 
    
    var date = document.createElement("td");
    date.append(transaction.date); 
    

    row.appendChild(title)
    row.appendChild(price)
    row.appendChild(category)
    row.appendChild(date)

    table.appendChild(row)
})


var addBtn = document.querySelector("#addButton a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");

addBtn.addEventListener("click", ()=>{
    // O que vai acontece quando clicar no botão adicionar
    popup.style.display = "flex";
    popup.style.transition = "display 5s"; 
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})


function moneyFormat(currency, price){
    var value = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency
    }).format(price);
    return value;
}