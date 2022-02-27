window.addEventListener(
    'scroll',
    function(){
        //Stiky header

        var nav = document.querySelector(".navbar");
        const offset = window.pageYOffset;
        if(offset > 20)
            nav.classList.add('sticky')
        else 
            nav.classList.remove('sticky')
        
        //on scroll menu animation
        var scrollPos = document.scrollingElement.scrollTop;
//        var scrollPos = document.querySelector("#main-content").scrollTop;
        var menuItems = document.querySelector("#menu").querySelectorAll("a");
        menuItems.forEach(
            (item) => {
                var currLink = item;
                var refElement = document.querySelector(currLink.hash);
                console.log(`hash: ${currLink.hash} scrollPos: ${scrollPos} - height: ${refElement.offsetHeight}`)
                if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.offsetHeight > scrollPos) {
                    menuItems.forEach(
                        (item) => {
                            item.classList.remove("active")
                        }
                    )
                    currLink.classList.add("active")

                    
                }



            }

        )

});
