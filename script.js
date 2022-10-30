let divs = document.createElement('div');
divs.innerHTML=`
<nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">

 

</ul>
</nav>
`



for(let j=1;j<10;j++){
    restdata(j);

  } 
document.body.append(divs);
let count=1;




let uls = document.getElementsByTagName('ul');


let lis = document.createElement('li');
lis.classList.add('page-item');
let a = document.createElement('a');
a.classList.add('page-link');
a.href='#';
a.innerText='prev';
a.onclick=((e)=>
{  
  let Pages = count--;
  if(count>0){
  let pg=Pages*10;
  for(let j=pg;j<pg+10;j++){
    restdata(j);
  }
}
  });
lis.append(a);

uls[0].appendChild(lis);


let arr=[];
for(let i=1;i<=5;i++){
let lis = document.createElement('li');
lis.classList.add('page-item');
let a = document.createElement('a');
a.classList.add('page-link');
a.href='#';
a.innerText=i;
count=i;
a.onclick=((e)=>
{  
  let Pages = a.innerText;
  count=Pages;
  let pg=Pages*10;
  for(let j=pg;j<pg+10;j++){
    restdata(j);
  }
  });
lis.append(a);

uls[0].appendChild(lis);
}


let lis1 = document.createElement('li');
lis1.classList.add('page-item');
let a1 = document.createElement('a');
a1.classList.add('page-link');
a1.href='#';
a1.innerText='next';
a1.onclick=((e)=>
{  
  let Pages = count++;
   if(count<=6){
  let pg=Pages*10;
  for(let j=pg;j<pg+10;j++){
    restdata(j);
  }
}
  });
lis1.append(a1);

uls[0].appendChild(lis1);

let divs1 = document.createElement('div');
divs1.innerHTML=`<table class="table table-striped">
<thead class="thead-dark">
  <tr>
  <th scope="col">S.no</th>
    <th scope="col">Name</th>
    <th scope="col">Abilities</th>
    <th scope="col">Moves</th>
    <th scope="col">Weight</th>
  </tr>
</thead>

</table>`;
document.body.append(divs1);

let tbody = document.createElement('tbody');
let tab = document.querySelector('table');
tab.append(tbody);

async function restdata(id){
    let ele= document.querySelector('tbody>tr');
    if(ele){
        ele.remove();
    }
    
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let result = await res.json();
    try{
    console.log(result);

    //result.name;
    //result.ablities[0].ability.name
    //result.weight;
    //result.moves[0].move.name;
       let tr = document.createElement('tr');

       for(let i=0;i<=4;i++){
       let td = document.createElement('td');
       if(i==0 ){
        td.innerText=id;
       }
       if(i==1 ){
        td.innerText=result.name;
       }
       if(i==2){
        result.abilities.forEach(ele => {
            td.innerHTML+=`<li>${ele.ability.name}</li>`
        });
        
    
       }

       if(i==3){
        td.innerHTML=``
        result.moves.forEach(ele => {
            td.innerHTML+=`<li>${ele.move.name}</li>`
        });
       }
       
       if(i==4){
          td.innerText=result.weight;
       }

       
      
       
       tr.append(td);
       }
       tbody.append(tr);
      
       
       
    }
    catch(error){
      console.log(error);
    }

}

