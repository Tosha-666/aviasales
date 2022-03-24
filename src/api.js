

export default class Aviasalesapi {
    baseURL ='https://front-test.beta.aviasales.ru/'
  


    async getResourse() {
      const res = await fetch(
        (`${this.baseURL}search`)
      )
      if (!res.ok) {
        // console.log(res)
        throw new Error(res.status)
      }
      const body = await res.json()
      if (body.total_results === 0) {
        throw new Error('not found')
      } else {
        this.getTickets(body.searchId)
        // return body
      }
    }
  async getTickets(searchID){
    const res = await fetch(
      (`${this.baseURL}tickets?searchId=${searchID}`)
    )
    if (!res.ok) {
      // console.log(res)
      throw new Error(res.status)
    }
    const body=await res.json()
    if (body.total_results === 0) {
      throw new Error('not found')
    } else {
      return body
    }
  }

    // async getGen{res() {
    //   const res = await fetch(
    //     `${this.baseURL}3/genre/movie/list?api_key=98450458092ec1ceaf6809681f572de7&language=en-US`
  
    //   )
    //   if (!res.ok) {
    //     throw new Error(res.status)
    //   }
    //   const body = await res.json()
  
    //   return body
    // }
  }