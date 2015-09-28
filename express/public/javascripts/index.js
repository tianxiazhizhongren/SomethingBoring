    $(window).load(function() {
      //- var scr = document.createElement("script");
      //- scr.src = '/jadeout/tpl.jade';
      //- document.body.appendChild(scr)
      $.ajax({
        url: '/jadeout/tpl.jade',
        dataType: 'script',
        //- beforeSend:function(xhr){
        //- console.log(xhr);
        //- xhr.setRequestHeader('Cache-Control','max-age='+(1000 * 60 * 60 * 24 * 365));
        //- },
        cache: true,
        success: function() {
          //console.log(jadeout.index['/tpl.jade'].toString())
            // console.log(JSON.stringify(jadeout.index))
        }
      })
    })

    console.log(sessionStorage)
    

    window.onunload = function(e,s) {
      console.log("e");
      console.log(e);
      sessionStorage.clear();
      
      for(var i in e){
        sessionStorage[i] = e[i].toString()
      }
      
      console.log("s");
      console.log(s);
      var index = jadeout.index;
      for (var i in index) {
        //sessionStorage['jadeout:' + i] = index[i].toString();
      }
      //sessionStorage.jadeout_index = jade
    }



    document.onkeydown = function() //屏蔽键盘F5  
      {
        if (window.event.keyCode == 116) {
          window.event.keyCode = 0;
          event.cancelBubble = true;
          return false;
        }
      }