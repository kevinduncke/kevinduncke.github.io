function fetchCertificates(param) {
  fetch(`./data/${param}-certificates.json`)
    .then((response) => response.json())
    .then((certificates) => {
      const list = document.getElementById(`${param}-row`);

      certificates.forEach((cert) => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
          <div class="card h-100 shadow-sm">
            <a 
              href="${cert.link}" 
              target="_blank"
              class="card-link"
            >
              <div class="card-body">
                <img
                  src="./res/PS-horizontal-color-fill-blue-text.png"
                  alt="Pluralsight Banner"
                  class="img-ps-banner"
                />      
                <h5 class="card-title">${cert.title}</h5>
                <p class="card-text">${cert.date} | ${cert.time}</p>
              </div>
            </a>
          </div>            
        `;

        list.appendChild(div);
      });
    })
    .catch((error) => console.error("Error fetching certificates: ", error));
}
