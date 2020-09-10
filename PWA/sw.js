const staticAccess=[
    './',
'./NEWS/index.html',
'./NEWS/search.html',
'./NEWS/filter1.html',
'./images/copyright.png',
'./images/home.png',
'./images/all.png',
'./images/news.png',
'./images/product.png',
'./images/review.png',
'./images/best.png',
'./images/root.png',
'./images/deals.png',
'./images/password.png',
'./images/share.png',
'./images/refresh.png',
'./images/search1.png'];


self.addEventListener("install",async e=>{
    const cache=await caches.open('static');
    cache.addAll(staticAccess)
   
});
self.addEventListener('fetch',e=>{
    const req=e.request;
    const url=new URL(req.url);
    if(url.origin===location.origin){
        e.respondWith(cacheFirst(req));
    }  
    else{
        e.respondWith(networkFirst(req))
    }
    

});
async function cacheFirst(req){
    const cachedResponse=await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req){
    const cache=await caches.open('static');
    try{
        const req=await fetch(req);
        cache.pull(req,res.clone());
        return res;
    }

    catch(err){
        return await cache.match(req);
    }
}
