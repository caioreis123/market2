import { ADD_ARTICLE } from "../constants/action-types"

const someState = {
	articles: [],
}

function someReducer(state = someState, action) {
	if (action.type === ADD_ARTICLE) {
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload),
		})
	}
	return state
}
//it is a pure function because it returns an object
export default someReducer
