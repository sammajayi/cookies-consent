function showBanner(){
    const banner = document.getElementById('cookies-container');
    banner.style.display = 'block';
}

function acceptCookies(){
    localStorage.setItem('cookieConsent', true)
    const banner = document.getElementById('cookies-container');
    banner.style.display = 'none';
}

document.getElementById('accept-cookies').addEventListener('click', acceptCookies)

window.onload = function(){
    showBanner()
}
