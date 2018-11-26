'use strict'

const request = require('request-promise')
const Promise = require('bluebird')
class Client {
  constructor (options) {
    this.options = options || {
      endpoint: {
        pictures: 'http://api.cloninstagram.com/picture',
        users: 'http://api.cloninstagram.com/user',
        auth: 'http://api.cloninstagram.com/auth'
      }
    }
  }

  getPicture (id, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/${id}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePicture () {}

  likePicture () {}

  listPictures () {}

  listPicturesByTag () {}

  saveuser () {}

  getUser () {}

  auth () {}
}
module.exports = Client
