const GET_WATERDATA = 'GET_WATERDATA'
const SUB_MIT = 'SUB_MIT'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_DETAILDATA = 'GET_DETAILDATA'
const GET_DETAILWATER = 'GET_DETAILWATER'
const GET_INDEXDATA = 'GET_INDEXDATA'
const GET_MOREDETAILWATER = 'GET_MOREDETAILWATER'
const GET_MOREINDEXWATER = 'GET_MOREINDEXWATER'
export default {
	[GET_WATERDATA](state, payload) {
		if (payload.res.code == 200){
				state.wateritem = payload.res.msg.records;
				if (payload.res.msg.records.length < state.pageSize){
					state.indexEnd = true;
			}
		 }
	},
	[GET_INDEXDATA](state, payload){
		if (payload.res.code == 200){
			state.indexdata = payload.res.msg;
			state.title = payload.res.msg.pagetitle;
			state.keywords = payload.res.msg.pagekeywords;
			state.description = payload.res.msg.pagedescription;
		}
	},
	[GET_DETAILDATA](state, payload){
		if (payload.res.code == 200){
			state.detaildata['top'] = payload.res.msg.picDetail;
			state.detaildata['center'] = payload.res.msg.relatedPics;
			state.detaildata['bottom'] = payload.res.msg.shop;
			state.detaildata['banner'] = payload.res.msg.banner;
			state.title = payload.res.msg.pagetitle;
			state.keywords = payload.res.msg.pagekeywords;
			state.description = payload.res.msg.pagedescription;
			if (payload.res.msg.picDetail.tags.tagType == 1){
				state.detailstyleTagId = payload.res.msg.picDetail.tags[0].tagId;
			}else {
				state.detailsceneTagId = payload.res.msg.picDetail.tags[0].tagId || "";
				return;
			}
			if (payload.res.msg.picDetail.tags[1]){
				state.detailsceneTagId = payload.res.msg.picDetail.tags[1].tagId;
			}else {
				state.detailsceneTagId = "";
			}
		}
	},
	[GET_DETAILWATER](state, payload){
		// console.log(payload.res);
		if (payload.res.code == 200){
			state.detailwater = payload.res.msg.records;
			if (payload.res.msg.records.length < state.pageSize){
				state.detailEnd = true;
			}
		 }else{
			 state.detailEnd = true;
		 }
	},
	[GET_MOREDETAILWATER](state, payload){
		if (payload.res.code == 200){
			state.detailwater = state.detailwater.concat(payload.res.msg.records);
			if (payload.res.msg.records.length < state.pageSize){
				state.detailEnd = true;
			}else{
			    state.detailpage ++;
			}
		}

	},
	[GET_MOREINDEXWATER](state, payload){
		if (payload.res.code == 200){
			state.wateritem = state.wateritem.concat(payload.res.msg.records);
			if (payload.res.msg.records.length < state.pageSize){
				state.indexEnd = true;
			}else{
			    state.indexPage ++;
			}
		}

	},
	[SUB_MIT](state, payload) {
		state.shopName = payload.shopName;
	}
}