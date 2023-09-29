    // let endpoint = `https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;
    let endpoint = `https://api.cricapi.com/v1/cricScore?apikey=213ca4f5-c0b7-4f51-be4f-f00da49a06df`;
    
    const container = document.getElementById("match-data");
    const r_container = document.getElementById("recent-match-data");
    const live_container = document.getElementById("live");
    const api_key = `fd3a4e8f-b464-4630-af5f-9a350559e758`;
    let url = `https://api.cricapi.com/v1/cricScore?apikey=${api_key}`;

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let authors = data;
    for(let i=0; i<authors.data.length; i++)
    {
        let d = authors.data[i];
         console.log(d.matchType)
        let item = document.createElement("div");
        let r_item = document.createElement("div");
        let live_item = document.createElement("div");
        if(d.status === "Match not started")
        {
        item.innerHTML =  `
        
        <div class="match-item">
        <div class="name-stats">
        <img src="${d.t1img}" alt="team-1">
        <h3>${d.t1}</h3>
        
        <img src="${d.t2img}" alt="team-2"> 
        <h3>${d.t2}</h3>

        <h4 class="type">${d.matchType}</h4>
        </div>
        <p class="status">${d.status}</p>
        <i class="time">${d.dateTimeGMT}</i>
        <div>
        `; 
        }

        // recent
        if(d.status !== "Match not started")
        {
        r_item.innerHTML =  `
        
        <div class="match-item">
        <div class="name-stats">
        <img src="${d.t1img}" alt="team-1">
        <h3>${d.t1}</h3>
        
        <img src="${d.t2img}" alt="team-2"> 
        <h3>${d.t2}</h3>

        <h4 class="type">${d.matchType}</h4>
        </div>
        <p class="status">${d.status}</p>
        <i class="time">${d.dateTimeGMT}</i>
        <div>
        `; 
        }

        // for live
        if(d.ms === "live" && d.status !== "Match not started")
        {
            live_item.innerHTML =  `

            <div class="card myCard mx-2 my-4" style="width:300px">
            <div class="live-img">
            <img src="${d.t1img}" class="card-img-top mx-2" alt="...">
            <img src="${d.t2img}" style="margin-left:70px" class="card-img-top" alt="...">
            </div>
  <div class="card-body">
    <h5 class="card-title">${d.t1} vs ${d.t2}</h5>
    <p class="card-text">${d.matchType}</p>
    <a href="#" class="btn btn-primary">${d.status}</a>
  </div>
</div>

        `; 
        }
        // container.appendChild(item);
        // r_container.appendChild(r_item);
        live_container.appendChild(live_item);
    }
    
  })

  let endpoint1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b605c34945f44a138b3e3b59ae732910`;

  let newsContainer = document.getElementById("news_Container");

  fetch(endpoint1)
  .then((response) => {
    return response.json();
  })
  .then((d) => {
    let mynews = d;

    for(let i=0; i<mynews.articles.length; i++)
    {
        let news_d = mynews.articles[i];
      console.log(news_d)
        let newsItem = document.createElement("div");
        newsItem.innerHTML =  `

        


         <div class="news-item">
         <marquee direction="left" height="100px">
            ${news_d.title}</marquee>
            </div>
        `; 
        newsContainer.appendChild(newsItem);
    }
  })

  const signup = document.getElementById("signup");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const more = document.getElementById("more");
  const share = document.getElementById("share");
  const login = document.getElementById("login");


  login.addEventListener('click', ()=>{
    location.href = "/login";
})
  signup.addEventListener('click', ()=>{

    window.location.href = 'signup'
  })
  about.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
contact.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
more.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
share.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})