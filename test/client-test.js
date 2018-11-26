'use strict'

const test = require('ava')
const cloninstagram = require('../')
const fixtures = require('./fixtures')
const nock = require('nock')

let options = {
  endpoints: {
    pictures: 'http://cloninstagram.test/picture',
    users: 'http://cloninstagram.test/user',
    auth: 'http://cloninstagram.test/auth'
  }
}

test.beforeEach(t => {
  t.context.client = cloninstagram.createClient(options)
})

test('client', t => {
  const client = cloninstagram.createClient()

  t.is(typeof client.getPicture, 'function')
  t.is(typeof client.savePicture, 'function')
  t.is(typeof client.likePicture, 'function')
  t.is(typeof client.listPictures, 'function')
  t.is(typeof client.listPicturesByTag, 'function')
  t.is(typeof client.saveuser, 'function')
  t.is(typeof client.getUser, 'function')
  t.is(typeof client.auth, 'function')
})

test('getPicture', async t => {
  const client = t.context.client

  let image = fixtures.getImage()

  nock(options.endpoints.pictures)
    .get(`/${image.publicId}`)
    .reply(200, image)

  let result = await client.getPicture(image.publicId)
  t.deepEqual(image, result)
})
