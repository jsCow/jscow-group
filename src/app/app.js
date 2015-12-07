$(function(){
	
	console.time('all');
	
	jsCow.get(jsCow.res.components.group).add(
		jsCow.get(jsCow.res.components.group).add(
			jsCow.get(jsCow.res.components.group).add(
				jsCow.get(jsCow.res.components.group).add(
					jsCow.get(jsCow.res.components.group)
				)
			)
		)
	).run();
	
	console.timeEnd('all');
	console.log(jsCow.componentsObjectList.length, "components created...");
	
});
