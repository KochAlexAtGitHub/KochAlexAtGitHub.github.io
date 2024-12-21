// Dynamisches Einfügen des Cookie-Banners

const YT_CONT_IPROP_TUT = "yt_cont_iprop_tut";
const YT_CONT_IPROP_WORKAROUND = "yt_cont_iprop_workaround";
const YT_CONT_PERM_VW_TUT = "yt_cont_perm_vw_tut";
let contNamesArray = [YT_CONT_IPROP_TUT, YT_CONT_IPROP_WORKAROUND, YT_CONT_PERM_VW_TUT];

document.addEventListener("DOMContentLoaded", function () {    
  const cookieName = "cookiesAccepted";
  const cookieSet = getCookie(cookieName);

  if (cookieSet) {
      for (let name of contNamesArray) {        
        var youtubeContainer = document.getElementById(name);
        if (youtubeContainer !== null)
        {
          youtubeContainer.innerHTML = getInnerHTMLByContainer(name);    
        }        
      }
  }
  else
  {
    fetch('cookie-banner.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);                      
      document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
    });
    
  }      
});

function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';                
  document.cookie = "cookiesAccepted=true; path=/; max-age=31536000";              
  location.reload(); //reload site in order to load the video        
}

function getInnerHTMLByContainer(containerName)
{
  if (containerName === YT_CONT_IPROP_TUT)
  {
    return `
          <div class="ratio ratio-16x9 m-5">
          <iframe 
            src="https://www.youtube.com/embed/5RawxK4-Qn4?si=DUuqVFWUxPY7QxPZ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`; 
  }
  else if (containerName === YT_CONT_IPROP_WORKAROUND)
  {
    return `
          <div class="ratio ratio-16x9 m-5">
          <iframe 
            src="https://www.youtube.com/embed/3El5Tlbmx9I?si=RjGBiJPYwj5Y29V_" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`; 
  }
  else if (containerName === YT_CONT_PERM_VW_TUT)
  {
    return `
          <div class="ratio ratio-16x9 m-5">
          <iframe 
            src="https://www.youtube.com/embed/w6c6Tqgo_sg?si=sJaUrYR8enGWrrWj" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`;     
  }
}

function getCookie(name) {      
  const value = `; ${document.cookie}`;  
  const parts = value.split(`; ${name}`);  
  if (parts.length === 2) 
    return parts.pop().split(";").shift();

  return null;
}