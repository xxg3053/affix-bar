$(document).ready(function(){
	//监听滚动条
	$(window).scroll(function(event) {
		/* Act on the event */
		var top = $(document).scrollTop(); //滚动条距离顶部的距离
		//console.log('top: '+top);
		var menu = $('#menu');
		var items = $('#content').find(".item"); //使用id筛选快 $('.item')

		var currentId = "";//当前所在楼层(item) #id
		items.each(function(index, el) {
			var m = $(this);
			var itemTop = m.offset().top;
			//console.log('itemTop: '+itemTop);
			if(top > itemTop - 200){
				currentId = "#" + m.attr('id');
			}else{
				return false;
			}
		});

		//给相应楼层的a设置current, 取消其他链接的current
		//console.log('currentId: '+ currentId);
		var currentLink = menu.find('.current');
		//console.log('currentLink: '+ currentLink.attr('href'))
		if(currentId && currentLink.attr('href') != currentId){
			//console.log('...');
			currentLink.removeClass('current');
			menu.find('[href=' + currentId + ']').addClass('current');
		}

	});
});