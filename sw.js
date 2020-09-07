self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open('static').then(cache=>{
            return cache.addAll(["./","./images/avatar3.png","./newspage/images/","./dealspage/images/"])
        })
    );
 
});
self.addEventListener('fetch',e=>{
   e.respondWith(
       caches.match(e.request).then(response=>{
    
        return response|| fetch(e.request)
    })
   )
})