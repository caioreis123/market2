import { ADD_ARTICLE } from "../constants/action-types"

function addArticle(payload) {
	return { type: ADD_ARTICLE, payload }
}

export default addArticle
