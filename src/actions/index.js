import API from '../api'

const ticketsLoaded = () => {
  return (dispatch) => {
    // dispatch(loading(true))
    dispatch(loading('loading'))
    API.get('search').then((res) => {
      const searchId = res.data.searchId
      let iterrateNumber = 10
      let tickets = []
      const getTickets = (requireId) => {
        API.get(`tickets?searchId=${requireId}`)
          .then((res) => {
            if (res.status === 200) {
              if (res.data.stop === false) {
                tickets.push(...res.data.tickets)
                dispatch(addTickets(tickets))
                getTickets(searchId)
              }
              if (res.data.stop === true) {
                tickets.push(...res.data.tickets)
                // dispatch(loading(false))
                dispatch(loading('succeed'))
                dispatch(addTickets(tickets))
              }
            }
          })
          .catch((err) => {
            if (err.message === 'Network Error') {
              dispatch(addFailure(err.message))
              dispatch(loading('failed')) //
            } else if (err.response.status === 500) {
              if (iterrateNumber > 0) {
                iterrateNumber -= 1
                getTickets(searchId)
              } else {
                dispatch(addFailure('Failed to load tickets'))
                dispatch(loading('failed')) //
              }
            } else if (err.response.status === 404) {
              dispatch(addFailure(err.message))
              dispatch(loading('failed')) //
            }
          })
      }
      getTickets(searchId)
    })
  }
}

const addFailure = (err) => {
  return {
    type: 'FETCH_TICKETS_FAILURE',
    payload: { err },
  }
}

const addTickets = (ticketsArr) => {
  return {
    type: 'FETCH_TICKETS_SUCCESS',
    payload: ticketsArr,
  }
}

const searchId = (searchId) => {
  return {
    type: 'searchId',
    payload: searchId,
  }
}

const filterAll = () => {
  return {
    type: 'all',
  }
}
const filterWithout = () => {
  return {
    type: 'without',
  }
}

const filterWithOne = () => {
  return {
    type: 'withOne',
  }
}

const filterWithTwo = () => {
  return {
    type: 'withTwo',
  }
}
const filterWithThree = () => {
  return {
    type: 'withThree',
  }
}

const changeFilterTab = (filter) => {
  return {
    type: 'changeFilter',
    payload: filter,
  }
}

const loading = (load) => {
  return {
    type: 'LOADING',
    payload: load,
  }
}

const showMore = () => {
  return {
    type: 'SHOW_MORE',
  }
}

export {
  ticketsLoaded,
  searchId,
  filterAll,
  filterWithout,
  filterWithOne,
  filterWithTwo,
  filterWithThree,
  changeFilterTab,
  loading,
  addFailure,
  addTickets,
  showMore,
}
