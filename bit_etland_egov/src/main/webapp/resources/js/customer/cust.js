var cust = cust || {}
cust = (()=>{
	let setpath =()=>{
		 _= $.ctx();
	      js = $.js();
	      compojs = js+'/component/compo.js';
	      prddjs = js+'/prd/prod.js';
	      custjs = js+'/customer/cust.js';
	      empjs = js+'/employee/emp.js';
	      r_cnt = '#right_content';
	      l_cnt = '#left_content';
		
	};
	
	let init =(x)=>{
		setpath();
		onCreate(x);
	};
	let onCreate =(x)=>{
		setContentView(x);
	};
	let setContentView =(x)=>{
		$.getScript(compojs,()=>{
			myPage(x);
			$('div button[type=submit]').click(e=>{
				alert('정보수정 클릭 ');
				upDatepage(x);
				e.preventDefault();
			});
			$('#left_content ul').empty();
			cust_navi();
			$('#nav_mypage').addClass('active');
			$('#srch_btn').on('click',()=>{
				let srchword = $('input[type=text]').val();
				if($.fn.nullChecker(srchword)){
					alert('빈칸/두자이상 을 입력해주세요.');
					
				}else{
					alert('입력값은?.'+srchword);
					/*/phones/{phone}/{page}*/
					let arr = {srchword:srchword,
								page:'1'}
					srch(arr);
				}
			});
		});
	};
	let srch=(x)=>{
		setpath();
		alert('테스트');
		$.getJSON(_+'/phones/'+x.srchword+'/'+x.page, d=>{
			alert('getjson시작 '+x.srchword);

			$(r_cnt).empty();
			$(compo.list()).appendTo(r_cnt);
			let table ="";
			let prod_name = [
				{val:'NO'},
				{val:'상품번호'},
				{val:'상품명'},
				{val:'공급자이름'},
				{val:'카테고리명'},
				{val:'수량'},
				{val:'판매금액'}
	
				
			];
			$('#cust_content').empty();
			$.each(prod_name,(i,j)=>{
				$('<th>'+j.val+'</th>').appendTo('#cust_content');
			});
			$.each(d.ls,(i,j)=>{
				table += '<tr><td>'+j.rownum+'</td>'
				+'<td>'+j.productID+'</td>'
				+'<td>'+j.productName+'</td>'
				+'<td>'+j.supplierID+'</td>'
				+'<td>'+j.categoryID+'</td>'
				+'<td>'+j.unit+'</td>'
				+'<td>'+j.price+'</td>'
				+'</tr>'
			});
			$(table).appendTo('#cust_content');
			$('#cust_content_2').attr('id','pagination');
			let pxy = d.pxy;
			if(pxy.existPrev){
				$('<a>&laquo;</a>').appendTo('#pagination')
				.click(function(){
					let arr3 = {srchword:x.srchword,
							page:$(this).text()}
					srch(arr3);
				});
			}
			let i= 0;
			for(i=pxy.startPage; i<=pxy.endPage; i++){
				if(pxy.pageNum == i){
					$('<a class="page active">'+i+'</a>')
				/*	.attr('href',_+'/phones/'+i)*/
					.appendTo('#pagination')
					.click(function(){
						alert('클릭한페이지'+$(this).text());
						let arr1 = {srchword:x.srchword,
								page:$(this).text()}
						srch(arr1);
					});
					
				}else{
					$('<a class="page">'+i+'</a>')
				/*	.attr('href',_+'/phones/'+i)*/
					.appendTo('#pagination')
					.click(function(){
						alert('클릭한페이지'+$(this).text());
						let arr2 = {srchword:x.srchword,
								page:$(this).text()}
						srch(arr2);
					});
				}
			};
			
			
			if(pxy.existNext){
				$('<a>&raquo;</a>').appendTo('#pagination')
				.click(function(){
					let arr3 = {srchword:x.srchword,
							page:$(this).text()}
					srch(arr3);
				});
				
			}
			
		
			
			
			
		});

	};
	let cust_navi =()=>{
		setpath();
		let arr = [
			{val:'마이페이지', name:'nav_mypage'},
			{val:'정보수정', name:'nav_update'},
			{val:'회원탈퇴', name:'nav_delete'},
			{val:'쇼핑몰', name:'nav_shop'},
			{val:'구매내역', name:'nav_history'},
			{val:'장바구니', name:'nav_basket'}
			];
		$.each(arr,(i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>')
				.attr('name',j.name)
				.attr('id',j.name)
				.addClass('cursor')
				.appendTo('#left_content ul')
				.click(function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
					switch(that){
					case 'nav_mypage' : 
						alert('마이페이지 클릭!')
						$('.nav li[name=nav_mypage]').click(e=>{
						
							e.preventDefault();
							/*updateE();*/
						});

						break;
					case 'nav_update' : 
						alert('회원수정 클릭!')
						$('.nav li[name=nav_update]').click(e=>{
							
							e.preventDefault();

						});

						break;
					case 'nav_delete' : 
						alert('회원탈퇴 클릭 ')
						$('.nav li[type=nav_delete]').click(e=>{
							e.preventDefault();
							
							
						});
						
						break;
					case 'nav_shop' : 
						$('#nav_shop').click(e=>{
							e.preventDefault();
							alert('쇼핑몰 클릭');
							prod.carousel();
						});
						
						break;
					case 'nav_history' : 
						alert('주문내역 클릭 ')
						$('.nav li[type=nav_history]').click(e=>{
							e.preventDefault();
							

						});
						break;
				
					case 'nav_basket' : 
						alert('장바구니 클릭 ')
						$('.nav li[type=nav_basket]').click(e=>{
							e.preventDefault();
							

						});
						break;
					}
				});
		}); //navi_end
	};

	let myPage =(x)=>{
		$(r_cnt).html(compo.cust_mypage());
		$('h2').eq(0).html('<h2>'+x.customerName+'님 환영합니다.</h2>');
		$('.w3-container').children('p').eq(0).html('<p>'+x.password+'</p>');
		$('.w3-container').children('p').eq(1).html('<p>'+x.phone+'</p>');
		$('.w3-container').children('p').eq(2).html('<p>'+x.city+'</p>');
		$('.w3-container').children('p').eq(3).html('<p>'+x.address+'</p>');
		$('.w3-container').children('p').eq(4).html('<p>'+x.postalcode+'</p>');

	};
	let upDatepage =(x)=>{
		$(r_cnt).empty();
		$(compo.cust_update()).appendTo(r_cnt);
		alert(x.password);
    	$('form input[name=password]').attr('value',x.password);
    	$('form input[name=phone]').attr('value',x.phone);
    	$('form input[name=city]').attr('value',x.city);
    	$('form input[name=address]').attr('value',x.address);
    	$('form input[name=postalcode]').attr('value',x.postalcode);
		//$('#password').html('<input type="password" placeholder="'+x.password+'" name="psw" "required"="">');
    	$('div button[type=submit]').click(()=>{
    		alert('정보수정 클릭 ');
    		updateE();
		});
	};
	let updateE =(x)=>{
		
		let data = { 
				customerID: x.customerID,
    			password : $('form input[name=password]').val(),
    			phone : $('form input[name=phone]').val(),
    			city : $('form input[name=city]').val(),
    			address : $('form input[name=address]').val(),
    			postalcode : $('form input[name=postalcode]').val()};
			
	    	$.ajax({
	    		url: $.ctx()+'/customers/update',
	    		type: 'put',
	    		data: JSON.stringify(data),
	    		dataType: 'json',
	    		contentType: 'application/json; charset=UTF-8',
	    		success: d=>{
					if(d.msg=='SUCCESS'){
						alert('수정 성공::'+d.msg);
						upDatepage();
						
					}else{
						alert('수정 실패');
						upDatepage();
					}
						
				},
				error: e=>{
					alert('실패');
				}
	    	
	    	});
		
	};
	
	
	let list = x=>{
		setpath();
		alert('x :: '+x)
		alert('cust list 접근');
		$.getJSON(_+'/customers/page/'+x, d=>{
			$(r_cnt).empty();
			$('<div class="grid-item" id="cust_lst">'
					+'<h1><font style="font-size: 30px">사원 리스트</font>'
					+'</h1>'
				    +'</div>'
				    +'<div class="grid-item" id="content_2"></div>')
				    .appendTo('#right_content');
			let table = '<table><tr><th>No.</th>'
				+'<th>아이디</th>'
				+'<th>이름</th>'
				+'<th>생년월일</th>'
				+'<th>성별</th>'
				+'<th>전화</th>'
				+'<th>주소</th>'
				+'<th>우편번호</th>'
				+'</tr>'
			$.each(d.ls,(i,j)=>{
				table += '<tr><td>'+j.rownum+'</td>'
				+'<td>'+j.customerID+'</td>'
				+'<td>'+j.customerName+'</td>'
				+'<td>'+j.ssn+'</td>'
				+'<td>'+'남'+'</td>'
				+'<td>'+j.phone+'</td>'
				+'<td>'+j.address+'</td>'
				+'<td>'+j.postalcode+'</td>'
				+'</tr>'
				
			});
			table += '</table>'
				
			$(table).attr('id','cust_tab')
				.css({'font-family':'arial, sans-serif',
						'border-collapse':'collapse',
						'width':'100%',
						'text-align': 'center',
						'display': 'inline-block'})
				.addClass('pagination center')
				.appendTo('#cust_lst');
			let html = '<div id=pagination>'
			let pxy = d.pxy;
			if(pxy.existPrev){
				$('<a id="laquo">&laquo;</a>').appendTo('#pagination');
			}
				let  i= 0;
				for(i=pxy.startPage; i<=pxy.endPage; i++){
					if(pxy.pageNum == i){
						$('<a class="page active">'+i+'</a>')
						.attr('href',_+'/customers/page/'+i)
						.appendTo(html)
						.click(e=>{
							e.preventDefault();
							alert('클릭한페이지'+$(this).text());
							list($(this).text());
						});
						
					}else{
						$('<a class="page">'+i+'</a>').appendTo(html);
						$('<a class="page active">'+i+'</a>')
						.attr('href',_+'/customers/page/'+pxy.nextBlock)
						.appendTo(html)
						.click(e=>{
							e.preventDefault();
							alert('클릭한페이지'+$(this).text());
							list($(this).text());
						});
					}
				};
				
			if(pxy.existNext){
				$('<a>&raquo;</a>').appendTo('#pagination');
			}
			html += '</div>';
			$(html).appendTo('#content_2');
	
	
			$.getScript(empjs,()=>{
				emp.init();
				
			});
				
		});
		
	};
	
	
	return {init:init, list:list}
})();