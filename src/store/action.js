import fetch from "isomorphic-fetch"
const detailwater =[
	{
		tags: [
		{
		tagType: 1,
		tagName: "欧美",
		tagId: "2"
		},
		{
		tagType: 2,
		tagName: "水下",
		tagId: "2"
		}
		],
	id: "295331_99665829",
	picWight: 320,
	picUrl: "//p1.meituan.net/dpmerchantimage/eb549f6e-27d3-44cd-a17f-671aa67a01ce.bmp%40320w_0e_1l%7Cwatermark%3D0",
	cityId: 1,
	shopName: "巴黎婚纱国际旗舰店",
	shopId: 1798321,
	categoryId: [
	"1631"
	],
	pichight: 0,
	picName: "22婚纱照图片@案例哪里",
	viewCount: 17535,
	relationId: 295331
	},
	{
	tags: [
	{
	tagType: 1,
	tagName: "欧美",
	tagId: "2"
	},
	{
	tagType: 2,
	tagName: "水下",
	tagId: "2"
	}
	],
	id: "295331_99665834",
	picWight: 320,
	picUrl: "//p1.meituan.net/dpmerchantimage/eb549f6e-27d3-44cd-a17f-671aa67a01ce.bmp%40320w_0e_1l%7Cwatermark%3D0",
	cityId: 1,
	shopName: "巴黎婚纱国际旗舰店",
	shopId: 1798321,
	categoryId: [
	"1631"
	],
	pichight: 0,
	picName: "22婚纱照图片@案例哪里",
	viewCount: 17504,
	relationId: 295331
	},
	{
	tags: [
	{
	tagType: 1,
	tagName: "韩式",
	tagId: "1"
	},
	{
	tagType: 2,
	tagName: "水下",
	tagId: "2"
	}
	],
	id: "295230_678424919",
	picWight: 320,
	picUrl: "//p1.meituan.net/wedding/e74555f71a78efd6414289eb9159143f1876021.jpg%40320w_0e_1l%7Cwatermark%3D0",
	cityId: 1,
	shopName: "巴黎婚纱国际旗舰店",
	shopId: 1798321,
	categoryId: [
	"1631"
	],
	pichight: 0,
	picName: "12婚纱照图片@测试案例181",
	viewCount: 17386,
	relationId: 295230
	},
	{
	tags: [
	{
	tagType: 1,
	tagName: "韩式",
	tagId: "1"
	},
	{
	tagType: 2,
	tagName: "海景",
	tagId: "1"
	}
	],
	id: "98659_99063337",
	picWight: 320,
	picUrl: "//p0.meituan.net/wedding/0639b2baa7025a351697a8da48c0fc5b66442.png%40320w_0e_1l%7Cwatermark%3D0",
	cityId: 1,
	shopName: "麦田婚纱摄影sdsd",
	shopId: 2557600,
	categoryId: [
	"1631"
	],
	pichight: 0,
	picName: "11婚纱照图片@哈哈哈",
	viewCount: 17336,
	relationId: 98659
	}

]
export default {
	getIndexData({ commit, state }) {
		console.log("-----------------")
		state.styleTagId = parseInt(global.styleTagId) || 0;
		state.sceneTagId = parseInt(global.sceneTagId) || 0;
	return  fetch('http://m.51ping.com/wedding/ajax/m/wedpiclib/index',{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          	},
			body:`categoryId=1631&styleTagId=${state.styleTagId}&sceneTagId=${state.sceneTagId}&source=3&cityId=0` 
		}).then(function(response) {
            	return response.json();
        	}).then(res => {
				return commit('GET_INDEXDATA', {
						res
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
			body:`categoryId=1631&styleTagId=${state.styleTagId}&sceneTagId=${state.sceneTagId}&source=3&cityId=0&pagesize=10&page=1` 
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
		   return commit('GET_DETAILWATER',{
			   detailwater
		   })
	},
	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}