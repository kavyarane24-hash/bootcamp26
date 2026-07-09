let transactions=[];

function addTransaction(){

    const title=document.getElementById("title").value;
    const amount=Number(document.getElementById("amount").value);
    const type=document.getElementById("type").value;

    if(title=="" || amount<=0){
        alert("Enter valid details");
        return;
    }

    transactions.push({
        title,
        amount,
        type
    });

    display();

    document.getElementById("title").value="";
    document.getElementById("amount").value="";
}

function display(){

    const list=document.getElementById("list");

    list.innerHTML="";

    let income=0;
    let expense=0;

    transactions.forEach((t,index)=>{

        if(t.type=="Income")
            income+=t.amount;
        else
            expense+=t.amount;

        const li=document.createElement("li");

        li.innerHTML=`
            <span>${t.title} - ${t.type} - ₹${t.amount}</span>
            <button class="delete" onclick="removeTransaction(${index})">Delete</button>
        `;

        list.appendChild(li);

    });

    document.getElementById("income").innerText=income;
    document.getElementById("expense").innerText=expense;
    document.getElementById("balance").innerText=income-expense;
}

function removeTransaction(index){

    transactions.splice(index,1);

    display();

}