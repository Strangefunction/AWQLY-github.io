 
   // 获取导航栏元素列表  
   var navItems = document.getElementsByClassName("nav-items");  
   // 为每一个元素添加监听事件  
   for(let i = 0; i < navItems.length; i++) {  
        // 为当前元素添加点击事件监听器  
        navItems[i].addEventListener("click", function() {  
           // 移除所有元素的 'active' 类名  
           for(let j = 0; j < navItems.length; j++) {  
             navItems[j].classList.remove('active');  
             // 除非有特定的理由需要移除 'id'，否则下面的代码可能会破坏你的页面逻辑  
             // navItems[j].removeAttribute("id");  
          }  
          // 给当前点击的导航栏元素添加 'active' 类名  
          this.classList.add('active');  
        });  
   }  
