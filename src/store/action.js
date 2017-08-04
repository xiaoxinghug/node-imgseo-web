import fetch from "isomorphic-fetch"
// const detaildata={
// 	  "top":{
// 		"shopName":"最新欧美大气婚纱照",
// 	  	"shopUrl":"//p0.meituan.net/wedding/35c0e9fc201cb9950c3778d9b34619bb368052.jpg@320w_240h_1e_1c_1l_80q|watermark=0.webp",
// 		 "tip":['sb','复古','海景'],
// 		 "view":5874 
// 	  },
// 	  "center":{
// 		  "shopName":"回家看看",
// 		  'picUrl':"//p1.meituan.net/wedding/c400ce938a021652d78f73d28b64e858389933.jpg@200w_150h_1e_1c_1l|watermark=0.webp",
// 		  "map":'sb',
// 		  "type":"婚纱礼服",
// 		  "number":5900,
// 		   "star":0.5
// 	  },
// 	  "bottom":{
// 		 "picUrl":['//p0.meituan.net/wedding/35c0e9fc201cb9950c3778d9b34619bb368052.jpg@320w_240h_1e_1c_1l_80q|watermark=0.webp','//p0.meituan.net/wedding/35c0e9fc201cb9950c3778d9b34619bb368052.jpg@320w_240h_1e_1c_1l_80q|watermark=0.webp','//p0.meituan.net/wedding/35c0e9fc201cb9950c3778d9b34619bb368052.jpg@320w_240h_1e_1c_1l_80q|watermark=0.webp'],
// 		  "caseName":"海岛摄影系ds",
// 		 "tip":['韩式','特色案例'] 
// 	  }
// 	}
const detailwater =[
	{
		"picUrl":"//p0.meituan.net/wedding/732fc2cecf2d8b3ce00a840f01f5f9651047643.jpg@200w_150h_1e_1c_1l_85q|watermark=0.webp",
		"shopName":"放学路上别走dsdsdsdsdsss",
		"tip":['韩式','复古','海景'],
		'viewnumber':5965,
		'width':170,
		'height':200,
		'id':1
	}, {
		"picUrl":"//p1.meituan.net/wedding/9e86ccef664f6523db2a7d0c07305462354739.jpg@183w_244h_1e_1c_1l_85q|watermark=0.webp",
		"shopName":"回家路上别走",
		"tip":['韩式','海景'],
		'viewnumber':5966,
		'width':170,
		'height':290,
	    'id':2
	},{
		"picUrl":"//p0.meituan.net/wedding/4f7d783ec5a65ac7c4bd6ec04bf18a7c489718.jpg@183w_244h_1e_1c_1l_85q|watermark=0.webp",
		"shopName":"放学路上别走",
		"tip":['韩式','复古','海景'],
		'viewnumber':5967,
		'width':170,
		'height':290,
		'id':3
	},{
		"picUrl":"//p0.meituan.net/wedding/732fc2cecf2d8b3ce00a840f01f5f9651047643.jpg@200w_150h_1e_1c_1l_85q|watermark=0.webp",
		"shopName":"回家路上别走",
		"tip":['韩式','海景'],
		'viewnumber':5968,
		'width':170,
		'height':200,
		'id':4
	},{
		"picUrl":"//p0.meituan.net/wedding/732fc2cecf2d8b3ce00a840f01f5f9651047643.jpg@200w_150h_1e_1c_1l_85q|watermark=0.webp",
		"shopName":"放学路上别走dsdsdsdsdsss",
		"tip":['韩式','复古','海景'],
		'viewnumber':5965,
		'width':170,
		'height':200,
		'id':5
	}
]
export default {
	getIndexData({ commit, state }) {
	return  fetch('http://m.51ping.com/wedding/ajax/m/wedpiclib/index',{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          	},
			body:`categoryId=1631&styleTagId=${global.styleTagId}&sceneTagId=${global.sceneTagId}&source=3&cityId=0` 
		}).then(function(response) {
			    // console.log(response);
            	return response.json();
        	}).then(res => {
				let styleTagId =  global.styleTagId;
				let sceneTagId =  global.sceneTagId;
				return commit('GET_INDEXDATA', {
						res,
						styleTagId,
						sceneTagId
				})
			})
	},
	
	getWaterData({ commit, state }) {
	 return fetch('https://m.51ping.com/wedding/ajax/m/wedpiclib/indexsearch',{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          	},
			body:`categoryId=1631&styleTagId=${global.styleTagId}&sceneTagId=${global.sceneTagId}&source=3&cityId=0&pagesize=10&page=1` 
		}).then(function(response) {
			// console.log(`${global.styleTagId}`);
            return response.json();
        }).then(res => {
			return commit('GET_WATERDATA', {
					res
				})
		})
	},
	getDetailData({commit,state}){
	    return fetch('https://m.51ping.com/wedding/ajax/m/wedpiclib/detail',{
				method:'post',
				credentials: 'include',
				headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
				},
				body:`picId=${global.picId}&source=3&cityId=0` 
			}).then(function(response) {
				console.log(`${global.picId}`);
				return response.json();
			}).then(res => {
				return commit('GET_DETAILDATA', {
						res
					})
			})
	},
	getDetailWater({commit,state}){
		   commit('GET_DETAILWATER',{
			   detailwater
		   })
	},
	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}