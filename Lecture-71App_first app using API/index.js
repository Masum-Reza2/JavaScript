let url = 'https://kontests.net/api/v1/all';
let response = fetch(url)
.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
    ihtml = ''
    for (const key in response) {
        console.log(response[key])
        ihtml +=
            `
        <div class="card" style="height:fit-content;">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="...">
            <div class= 'setup'>
              <h5>${response[key].name}</h5>
              <p">Starts at :${response[key].start_time}</p>
              <p">Ends at : ${response[key].end_time}</p>
              <p">Duration :${response[key].duration}</p>
              <p">in_24_hours : ${response[key].in_24_hours}</p>
              <p">site :${response[key].site}</p>
              <p">status ${response[key].status}</p>
              <a href="${response[key].url}" class="btn btn-primary">Visit Contest!</a>
            </div>
          </div>
        `
        let contest = document.getElementById('contest');
        contest.innerHTML = ihtml
        }
    })