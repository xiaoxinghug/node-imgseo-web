import fetch from "isomorphic-fetch";
import fetchJsonp from "fetch-jsonp";
import url from '../lib/url.js';
const categoryId = 1631;
const isSEO = 'true';
const source = 3;
const contentType = 'application/x-www-form-urlencoded'
export default {
	getIndexData({ commit, state }) {
		let params = [
			'categoryId=' + categoryId,
			'styleTagId=' + state.styleTagId,
			'sceneTagId=' + state.sceneTagId,
			'source=' + source,
			'isSEO=' + isSEO
		].join("&");
	return  fetch(`${url}/index`,{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': contentType,
			'Cookie': state.cookie
          	},
			body:params 
		}).then(function(response) {
            	return response.json();
        	}).then(res => {
				return commit('GET_INDEXDATA', {
						res
				})
			})
	},
	
	getWaterData({ commit, state }) {
		let params = [
			'categoryId=' + categoryId,
			'styleTagId=' + state.styleTagId,
			'sceneTagId=' + state.sceneTagId,
			'source=' + source,
			'isSEO=' + isSEO,
			'pagesize='+ state.pageSize,
			'page='+1
		].join("&");
	 return fetch(`${url}/indexsearch`,{
			method:'post',
			credentials: 'include',
			headers: {
            'Content-Type': contentType,
			 'Cookie': state.cookie
          	},
			body: params
		}).then(function(response) {
            return response.json();
        }).then(res => {
			return commit('GET_WATERDATA', {
					res
				})
		})
	},
	getDetailData({commit,state}){
	    	return fetch(`${url}/detail`,{
				method:'post',
				credentials: 'include',
				headers: {
				'Content-Type': contentType,
				'Cookie': state.cookie
				},
				body:`picId=${state.picId}&source=${source}&isSEO=${isSEO}` 
			}).then(function(response) {
				return response.json();
			}).then(res => {
				return commit('GET_DETAILDATA', {
						res
					})
			})
	},
	getDetailWater({commit,state}){
		let params = [
			'categoryId=' + categoryId,
			'styleTagId=' + state.detailstyleTagId,
			'sceneTagId=' + state.detailsceneTagId,
			'source=' + source,
			'isSEO=' + isSEO,
			'pagesize='+ state.pageSize,
			'page='+1
		].join("&");
		return fetch(`${url}/detailmorepic`,{
				method:'post',
				credentials: 'include',
				headers: {
				'Content-Type': contentType,
				'Cookie': state.cookie
				},
				body:params
			}).then(function(response) {
				return response.json();
			}).then(res => {
				return commit('GET_DETAILWATER', {
						res
					})
			})
	},
	getMoreDetailWater({commit,state}){
		let params = [
			'categoryId=' + categoryId,
			'styleTagId=' + state.detailstyleTagId,
			'sceneTagId=' + state.detailsceneTagId,
			'source=' + source,
			'isSEO=' + isSEO,
			'pagesize='+ state.pageSize,
			'page='+state.detailpage
		].join("&");
		let url = `${url}/detailmorepic`+params
		return fetchJsonp(url).then(function(response) {
				return response.json();
			}).then(res => {
				return commit('GET_MOREDETAILWATER', {
						res
					})
			})
	},
	getMoreIndexWater({commit,state}){
		let params = [
			'categoryId=' + categoryId,
			'styleTagId=' + state.styleTagId,
			'sceneTagId=' + state.sceneTagId,
			'source=' + source,
			'isSEO=' + isSEO,
			'pagesize='+ state.pageSize,
			'page='+state.indexPage
		].join("&");
	   let url = `${url}/indexsearch`+params
	   return fetchJsonp(url).then(function(response) {
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