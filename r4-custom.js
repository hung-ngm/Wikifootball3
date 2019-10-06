

let urlId = parseInt(window.location.href.split('=')[1]);
let footballerInfo = dataBase.filter(value => value.id === urlId)[0];
let fooballerInfoContainer = document.getElementById('footballer-info');
fooballerInfoContainer.innerHTML = `
    <img src=${footballerInfo.avatar} alt="Paris" style="width:16rem; height:16rem;">
    <h2 style='margin:15px;padding:15px;font-size:2rem;'>${footballerInfo.quote[0].author}</h2>
`
let quoteTitle = document.getElementById('quote_author');
quoteTitle.innerHTML =`
    Quote from ${footballerInfo.quote[0].author}
`
let quoteContainer = document.getElementById('quote-container');
quoteContainer.innerHTML=`
    <div class="nodeListedOn__item relative" style="background-image: url( ${footballerInfo.quote[0].image} );">
    <span class="nodeListedOn__moreInfo nodeListedOn__moreInfo--noTrivia relative block black"> 
        <span class="nodeListedOn__itemRanking flex white uppercase roboto"> 
            <strong class="nodeListedOn__itemRankingPos inlineBlock robotoC">#1</strong> of 2</span>
            </span> 
            <h2 class="nodeListedOn__itemMeta grey relative flex">
                <span class="nodeListedOn__itemCount block grey">${footballerInfo.quote[0].author}</span>${footballerInfo.quote[0].content}
            </h2> 
        </div>
    <div class="nodeListedOn__item relative" style="background-image: url( ${footballerInfo.quote[1].image} );">
    <span class="nodeListedOn__moreInfo nodeListedOn__moreInfo--noTrivia relative block black"> 
    <span class="nodeListedOn__itemRanking flex white uppercase roboto"> 
        <strong class="nodeListedOn__itemRankingPos inlineBlock robotoC">#2</strong> of 2</span>
        </span> 
        <h2 class="nodeListedOn__itemMeta grey relative flex">
            <span class="nodeListedOn__itemCount block grey">${footballerInfo.quote[1].author}</span>${footballerInfo.quote[1].content}
        </h2> 
        </div> 
`

















function fresh() {
    let shooting = footballerInfo.shooting / 10;
    let passing = footballerInfo.passing / 10;
    let technique = footballerInfo.technique / 10;
    let dribbling = footballerInfo.dribbling / 10;
    let heading = footballerInfo.heading / 10;
    let tackling = footballerInfo.tackling / 10;
    hexagon.init('demo', 100, ['Shooting', 'Passing', 'Technique', 'Dribbling', 'Heading', 'Tackling']);
    hexagon.draw([shooting, passing, technique, dribbling, heading, tackling]);
}
fresh();

