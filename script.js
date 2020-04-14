const fetchCat = () => {
    let loader = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
    document.getElementById('cat-pic').innerHTML = loader;
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(cats => {
            console.log(cats)
            cats.forEach(cat => {
            let result = `<h2> Here your lovely cat </h2>
                <div>
                    <a href="${cat.url}" target="_blank"><img src="${cat.url}"></a>
                </div>`;
            document.getElementById('cat-pic').innerHTML = result;
        })
    })
};