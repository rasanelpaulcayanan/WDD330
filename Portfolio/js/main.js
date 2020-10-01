const links = [
    {
        label:'Week 1',    
        link:'Week1/index.html'
    }
,
    {
        label:'Week 2',    
        link:'Week2/index.html'
    }
,
    {
        label:'Week 3',    
        link:'Week3/index.html'
    }
]


    //document.getElementById("dynamicContent").innerHTML = links[i].label;
   // document.getElementById("dynamicContent2").href = links[i].link;

   const ol = document.getElementById('list');

   for ( i = 0, max = links.length; i < max ; i++)
   {
       const li = document.createElement('li');
       const a = document.createElement('a');
      // li.innerHTML = links[i].label;
       a.href = links[i].link;
       a.innerHTML = links[i].label
       ol.appendChild(li);
       li.appendChild(a);
   
   }
   
   