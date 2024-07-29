
    (function() {
        var hotItems = [];
        var container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.bottom = '10px';
        container.style.right = '10px';
        container.style.backgroundColor = 'white';
        container.style.border = '1px solid #ccc';
        container.style.padding = '10px';
        container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
        
        var title = document.createElement('h3');
        title.innerText = '知乎热点';
        container.appendChild(title);
        
        var list = document.createElement('ul');
        hotItems.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.innerText = item;
            list.appendChild(listItem);
        });
        container.appendChild(list);
        
        document.body.appendChild(container);
    })();
    # zhihu
