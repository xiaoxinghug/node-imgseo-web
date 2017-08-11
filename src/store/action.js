import fetch from "isomorphic-fetch";
import fetchJsonp from "fetch-jsonp";
export default {
	getIndexData({ commit, state }) {
	return  fetch('https://m.dianping.com/wedding/ajax/m/wedpiclib/index',{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
			'Cookie': state.cookie
          	},
			body:`categoryId=1631&styleTagId=${state.styleTagId}&sceneTagId=${state.sceneTagId}&source=3&isSEO=true` 
		}).then(function(response) {
            	return response.json();
        	}).then(res => {
				return commit('GET_INDEXDATA', {
						res
				})
			})
	},
	
	getWaterData({ commit, state }) {
	 return fetch('https://m.dianping.com/wedding/ajax/m/wedpiclib/indexsearch',{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
			 'Cookie': state.cookie
          	},
			body:`categoryId=1631&styleTagId=${state.styleTagId}&sceneTagId=${state.sceneTagId}&source=3&cityId=0&pagesize=10&page=1&isSEO=true` 
		}).then(function(response) {
            return response.json();
        }).then(res => {
			return commit('GET_WATERDATA', {
					res
				})
		})
	},
	getDetailData({commit,state}){
	    	return fetch('https://m.dianping.com/wedding/ajax/m/wedpiclib/detail',{
				method:'post',
				credentials: 'include',
				headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
				},
				body:`picId=${state.picId}&source=3&isSEO=${true}` 
			}).then(function(response) {
				// console.log(`${global.picId}`);
				return response.json();
			}).then(res => {
				return commit('GET_DETAILDATA', {
						res
					})
			})
	},
	getDetailWater({commit,state}){
		return fetch('https://m.dianping.com/wedding/ajax/m/wedpiclib/detailmorepic',{
				method:'post',
				credentials: 'include',
				headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
				},
				body:`categoryId=1631&styleTagId=${state.detailstyleTagId}&sceneTagId=${state.detailsceneTagId}&source=3&cityId=0&pagesize=${state.pageSize}&page=1&isSEO=true` 
			}).then(function(response) {
				// console.log(`${global.picId}`);
				return response.json();
			}).then(res => {
				return commit('GET_DETAILWATER', {
						res
					})
			})
	},
	getMoreDetailWater({commit,state}){
		let url = 'https://m.dianping.com/wedding/ajax/m/wedpiclib/detailmorepic'+`?categoryId=1631&styleTagId=${state.detailstyleTagId}&sceneTagId=${state.detailsceneTagId}&source=3&cityId=0&pagesize=${state.pageSize}&page=${state.detailpage}&isSEO=true`
		return fetchJsonp(url).then(function(response) {
				// console.log(`${global.picId}`);
				return response.json();
			}).then(res => {
				return commit('GET_MOREDETAILWATER', {
						res
					})
			})
	},
	getMoreIndexWater({commit,state}){
	   let url = 'https://m.dianping.com/wedding/ajax/m/wedpiclib/indexsearch'+`?categoryId=1631&styleTagId=${state.styleTagId}&sceneTagId=${state.sceneTagId}&source=3&cityId=0&pagesize=${state.pageSize}&page=${state.indexPage}&isSEO=true`
	   return fetchJsonp(url).then(function(response) {
				// console.log(`${global.picId}`);
				return response.json();
			}).then(res => {
				return commit('GET_MOREINDEXWATER', {
						res
					})
			})
	}
	// initializeData({ commit }) {
	// 	commit('INITIALIZE_DATA')
	// }
}