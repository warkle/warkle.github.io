String.prototype.rp = function(obj){
	return this.replace(/\$\w+\$/gi,function(matchs){
			return obj[matchs.replace(/\$/g,'')]||''
		}
	)
}