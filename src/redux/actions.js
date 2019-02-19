export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const FETCH_JOBS = 'FETCH_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

function fetchUsers() {
  return { type: 'FETCH_USERS' }
}

function receiveUsers(users) {
  return { type: RECEIVE_USERS, users: users }
}

function fetchJobs() {
  return { type: 'FETCH_JOBS' }
}

function receiveJobs(jobs) {
  return { type: RECEIVE_JOBS, jobs: jobs }
}

export function getUsers() {
  return dispatch => {
    dispatch(fetchUsers())
    fetch('https://job-vacancy-backend.herokuapp.com/users-list')
      .then(response => response.json())
      .then(response => {
        dispatch(receiveUsers(response))
      })
      .catch((error) => {
        // console.log(error)
        alert('Unable to retrieve list of users')
      })
  }
}

export function getJobs() {
  return dispatch => {
    dispatch(fetchJobs())
    fetch('https://job-vacancy-backend.herokuapp.com/all-jobs')
      .then(response => response.json())
      .then(response => {
        dispatch(receiveJobs(response))
      })
      .catch((error) => {
        console.log(error)
        alert('Unable to retrieve list of jobs')
      })
  }
}

export const userArray = userArray => {
  return {
    type: 'userArray',
    ...userArray
  }
}