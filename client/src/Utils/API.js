import axios from 'axios';
let url = 'https://sheltered-shore-07884.herokuapp.com'
export default {

    // General
    // ============
    editAccount: (creds) => {
        return axios.put(`${url}/api/settings`, creds)
    },

    // Auth functions
    // =================
    getUser: () => {
        return axios.get(`${url}/auth/user`)
    },

    // Handle User Login
    handleLogin: (creds) => {
        return axios.post(`${url}/auth/login`, creds)
    },

    logout: function () {
        return axios.get(`${url}/auth/logout`)
    },

    handleSignup: (creds) => {
        return axios.post(`${url}/auth/signup`, creds)
    },



    // ===========================
    // Admin Function
    // =======================

    createAccount: (creds) => {
        return axios.post(`${url}/auth/signup`, creds)
    },

    adminList: () => {
        return axios.get(`${url}/api/admin/`)
    },

    instructorList: () => {
        return axios.get(`${url}/api/admin/instructor`)
    },

    studentList: () => {
        return axios.get(`${url}/api/admin/student`)
    },

    deleteAdmin: (id) => {
        return axios.delete(`${url}/api/admin/` + id)
    },

    deleteInstructor: (id) => {
        return axios.delete(`${url}/api/admin/instructor/` + id)
    },

    deleteStudent: (id) => {
        return axios.delete(`${url}/api/admin/student/` + id)
    },

    // ======================
    // Instructor Functions
    // =======================
    getCohorts: id => {
        return axios.get(`${url}/api/instructor/` + id)
    },

    cohortStudentList: id => {
        return axios.get(`${url}/api/instructor/cohorts/` + id)
    },

    cohortCreate: creds => {
        return axios.post(`${url}/api/instructor/cohorts`, creds)
    },

    studentCreate: creds => {
        return axios.post(`${url}/api/instructor/students`, creds)
    },

    inspectStudent: id => {
        return axios.get(`${url}/api/instructor/students/` + id)
    },

    studentRemove: id => {
        return axios.delete(`${url}/api/instructor/students/` + id)
    },

    getGraph: list => {
        return axios.post(`${url}/api/instructor/cohorts/graph`, list)
    },


    // =====================
    // Student Functions
    // =====================

    editGithubUsername: (creds) => {
        return axios.put(`${url}/api/student/ghUsername`, creds)
    },

    getMyData: (username) => {
        return axios.get(`${url}/api/student/` + username)
    }

}