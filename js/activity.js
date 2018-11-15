
var data = {
	intro:'XX优惠活动火热进行中',
	prods:[
		{
			id:1,
			src:'../images/product/1.png',
			name:'',
			model:0,
			price:998,
			discount:12,
			num:0,
		},
		{
			id:2,
			src:'../images/product/2.png',
			name:'',
			model:0,
			price:138,
			discount:7,
			num:0,
		},
	],
}

var eleIntro = document.querySelector('#intro')

eleIntro.innerHTML = data.intro//'<p>' + data.intro + '</p>'

var template = document.querySelector('template').innerHTML
var eleProd = document.querySelector('#prods')
var html = ''

if(data.prods){
	data.prods.forEach(e=>{
			html += template.rp(e)
		}
	)

	eleProd.innerHTML = html
	
}

window.onload = ()=>{
	document.querySelectorAll('.prod').forEach(e=>{
				e.addEventListener('click',c=>{
					alert(c.target.parentNode.getAttribute('data-id')) //.getAttribute('data-id')
					alert(data.prods[parseInt(c.target.parentNode.getAttribute('data-id'))-1])
					//alert(data.prods[0].price)
				}
			)
		}
	)
}