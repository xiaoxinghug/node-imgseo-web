import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	wateritem: [
	],
	detaildata:{
	
	},
	detailwater:[
	],
	indexdata:{

	},
	title:"回家看看",
	keywords:"没救了",
	description:"结婚",
	styleTagId:"",
	sceneTagId:"",
	detailstyleTagId:"",
	detailsceneTagId:"",
	pageSize:13,
	indexPage:1,
	detailpage:2,
	detailEnd:false
	
}

export function createStore (){
	return new Vuex.Store({
		state,
		actions,
		mutations
	})
}