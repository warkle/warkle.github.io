
var data = {/**/
	activity:[
	  {
		title:"活动1",
		src:"../images/id1.jpg",
		id:"1",
	  },
	  {
		title: "活动2",
		src: "../images/id2.jpg",
		id: "2",
	  },
	]

}

var ele = document.querySelector('#content')
var template = document.querySelector('template').innerHTML

var html = ''

if(data.activity)
	data.activity.forEach(e=>{
			html += template.rp(e)
		}
	)
else
	html = '<div id="none">目前暂无活动</div>'

ele.innerHTML = html
