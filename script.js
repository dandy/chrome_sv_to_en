function SendToTranslate(selectedText) {
    var apiCall = 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate?appId=8B841CA7C1A03443682C52AD07B7775A7BD5B3AA&from=sv&to=en&text=' + selectedText;
    httpGetUrl(apiCall);
}

chrome.contextMenus.create({
    "title": "Translate to English",
    "contexts": ["selection"],
    "onclick": function (info, tab) {
        SendToTranslate(info.selectionText);
    }
});

function httpGetUrl(theUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", theUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            alert(xhr.responseText);
        }
    }
    xhr.send();
}