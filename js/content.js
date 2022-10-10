videos = new Array();

chrome.storage.sync.set({
    "videos": videos
});

var tags = document.querySelectorAll('source');


for (i=0;i<tags.length;i++) {
    var title = tags[i].parentNode.parentNode.getAttribute('title');
    var url = tags[i].getAttribute('src');
    var video = new Object();

    if (title){
        video.title = title;
    } else {
        video.title = "No Title"
    }    
    video.url = url;
    video.checked = false;
    //console.log(tags[i].parentNode.parentNode.getAttribute('title'));
    //console.log(tags[i].getAttribute('src'));
    videos[i] = video;
}

console.log(videos);

chrome.storage.sync.set({
    "videos": videos
});