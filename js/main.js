$(function(){
	var _window = $(window),
		_header = $('.site-header'),
		headerChange = $('.header-change'),
		heroBottom;
	
	_window.on('scroll',function(){		
		heroBottom = $('.hero').height();
		if(_window.scrollTop() > heroBottom){
			headerChange.addClass('show');  
		}
		else{
			headerChange.removeClass('show');
		}
	});
	
	_window.trigger('scroll');
    
    
    
   // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 600; // ミリ秒
        // 移動先を50px上にずらす
        var adjust = 55;
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整
        var position = target.offset().top - adjust;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
       });
});