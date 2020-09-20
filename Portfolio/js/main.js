var links = [
    {
        label:'Week 1',    
        link:'Week1/index.html'
    }
]
document.getElementById("dynamicContent").innerHTML = links[0].label;
document.getElementById("dynamicContent2").href = links[0].link;

