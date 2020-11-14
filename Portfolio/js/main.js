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
    ,
    {
        label:'Week 4',    
        link:'Week4/index.html'
    }
    ,
    {
        label:'Week 5',    
        link:'Week5/index.html'
    }
    ,
    {
        label:'Week 6',    
        link:'Week6/index.html'
    }

    ,
    {
        label:'Week 7',    
        link:'Week7/index.html'
    }
    ,
    {
        label:'Week 8',    
        link:'Week8/index.html'
    }
,
    {
        label:'Week 9',    
        link:'Week9/index.html'
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
   
   