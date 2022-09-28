import router from "@/router";
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";
export const namespaced = true;

export const state = {
  user: null,
  email: localStorage.getItem("email") || "",
  loading: false,
  error: null,
  stepone: false,
  steptwo: false,
  stepfamily: false,
  token: localStorage.getItem("token") || "",
  family: null,
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_FAMILY(state, family) {
    state.family = family;
  },
  SET_EMAIL(state, email) {
    state.email = email;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_STEPONE(state, stepone) {
    state.stepone = stepone;
  },
  SET_STEPFAMILY(state, stepfamily) {
    state.stepfamily = stepfamily;
  },
  SET_STEPTWO(state, steptwo) {
    state.steptwo = steptwo;
    // token = state.token;
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
  logout(payload) {
    return AuthService.logout(payload).then(() => {
      localStorage.removeItem("clientId");
      localStorage.removeItem("firstNameClient");
      localStorage.removeItem("lastNameClient");
      localStorage.removeItem("emailClient");
      localStorage.removeItem("firstNameUser");
      localStorage.removeItem("lastNameUser");
      localStorage.removeItem("formal");
      localStorage.removeItem("token");
      router.push({ path: "/Start" });
    });
  },

  // async loginA({ commit }, payload) {
  //   commit("SET_LOADING", true);
  //   try {
  //     const response = await AuthService.login(payload);
  //     commit("SET_STEPONE", true);
  //     commit("SET_LOADING", false);
  //     commit("SET_ERROR", response);
  //   } catch (error) {
  //     commit("SET_LOADING", false);
  //     commit("SET_STEPONE", false);
  //     commit("SET_ERROR", getError(error));
  //   }
  // },

  async loginA({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginA(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },

  async loginB({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginB(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },

  async loginC({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginC(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginD({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginD(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginE({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginE(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginH({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginH(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginI({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginI(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginJ({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginJ(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginK({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginK(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },

  async loginL({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginL(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginM({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginM(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginN({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginN(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginO({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginO(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async loginP({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.loginP(payload);
      commit("SET_TOKEN", response.data.token);
      localStorage.setItem("token", response.data.token);
      // axios.defaults.headers.common['Authorization'] = response.data.token
      commit("SET_STEPTWO", true);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_STEPTWO", false);
      commit("SET_ERROR", getError(error));
    }
  },

  setGuest(context, { value }) {
    window.localStorage.setItem("guest", value);
  },
};

export const getters = {
  authUser: (state) => {
    return state.user;
  },
  email: (state) => {
    return state.email;
  },
  stepOne: (state) => {
    return state.stepone;
  },
  stepTwo: (state) => {
    return state.steptwo;
  },
  stepFamily: (state) => {
    return state.stepfamily;
  },
  family: (state) => {
    return state.family;
  },
  error: (state) => {
    return state.error;
  },
  loading: (state) => {
    return state.loading;
  },
  token: (state) => {
    return state.token;
  },
  loggedIn: (state) => {
    return !!state.user;
  },
  guest: () => {
    const storageItem = window.localStorage.getItem("guest");
    if (!storageItem) return false;
    if (storageItem === "isGuest") return true;
    if (storageItem === "isNotGuest") return false;
  },
};
