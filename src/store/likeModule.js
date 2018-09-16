const likeModule = {
    namespaced: true,
    state: {
        liked: false,
        likes: 10
    },
    getters: {
        total(state) {
            return state.likes;
        },
        likes(state, getters, rootState) {
            
            return state.likes;
        },
        liked(state) {
            return state.liked;
        }
    },
    mutations: {
        toggleLike(state) {
            state.liked = !state.liked;
        },
        inceaseLike(state) {
            state.likes += 1;
        },
        decreaseLike(state) {
            state.likes -= 1;
        }
    },
    actions: {
        toggleLikes(context) {
            context.commit("toggleLike");
            if (context.state.liked) {
                context.commit("decreaseLike");
            } else {
                context.commit("inceaseLike");
            }
        }
    }
}
export default likeModule