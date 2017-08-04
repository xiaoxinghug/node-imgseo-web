const GET_WATERDATA = 'GET_WATERDATA'
const SUB_MIT = 'SUB_MIT'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_DETAILDATA = 'GET_DETAILDATA'
const GET_DETAILWATER = 'GET_DETAILWATER'
const GET_INDEXDATA = 'GET_INDEXDATA'
export default {
	[GET_WATERDATA](state, payload) {
		//  console.log('-----');
		//  console.log(payload);
		if (payload.res.code == 200){
				state.wateritem = payload.res.msg.records;
		 }
	},
	[GET_INDEXDATA](state, payload){
		// setTimeout(()=>{
		state.styleTagId = parseInt(payload.styleTagId);
		state.sceneTagId = parseInt(payload.sceneTagId);
		state.indexdata = payload.res.msg;
		state.title = payload.res.msg.pagetitle;
		state.keywords = payload.res.msg.pagekeywords;
		state.description = payload.res.msg.pagedescription;
		// },50)
	},
	[GET_DETAILDATA](state, payload){
		// setTimeout(()=>{
		   console.log(payload.res);
		if (payload.res.code == 200){
			state.detaildata['top'] = payload.res.msg.picDetail;
			state.detaildata['center'] = payload.res.msg.relatedPics;
			state.detaildata['bottom'] = payload.res.msg.shop;
			// console.log(state.detaildata);
		}
	    // console.log(state.detaildata);
		// state.detaildata = payload	
		// },50)
	},
	[GET_DETAILWATER](state, payload){
		// setTimeout(()=>{
		state.detailwater = payload.detailwater	
		// },50)
	},
	[INITIALIZE_DATA](){

	},
	[SUB_MIT](state, payload) {
		state.shopName = payload.shopName;
	}
}