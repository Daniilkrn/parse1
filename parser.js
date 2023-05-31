window.addEventListener('DOMContentLoaded', () =>{
    const body = document.querySelector('body');
    // body.childNodes.forEach(el => console.log(el))
    let resData = []
    fetch("rss.xml")
    .then(response => {
        return response.text()
    })
    .then(xmlString => {
        const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml")
        const item = xmlDoc.querySelectorAll("item");
        const description = xmlDoc.querySelectorAll("description");
        const link = xmlDoc.querySelectorAll("link");
        const author = xmlDoc.querySelectorAll("author");
        const pubDate = xmlDoc.querySelectorAll("pubDate");
        for (elem of item) {
            // const id = item.querySelector("id").textContent
            const title = elem.querySelector("title").textContent
            const description = elem.querySelector("title").textContent
            const author = elem.querySelector("author").textContent
            const pubDate = elem.querySelector("pubDate").innerHTML;
            const link = elem.querySelector("link").innerHTML;
            // for (const elemDesc of description) {
            //     if(elemDesc.querySelector("strong")){
            //         console.log(elemDesc.textContent);
            //     }
            // }
            let obj = {
                title,
                description,
                author,
                pubDate,
                link
            }
            resData.push(obj)
        }
    })
    console.log(resData);
    // fetch('',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify()
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
})








    