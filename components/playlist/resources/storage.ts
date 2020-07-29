/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const keyName = 'playlist-data'

export const defaultState: Playlist.State = {
  lists: []
}

export const getLoadTimeData = (state: Playlist.State): Playlist.State => {
  state = { ...state }
  return state
}

export const cleanData = (state: Playlist.State): Playlist.State => {
  return getLoadTimeData(state)
}

export const load = (): Playlist.State => {
  const data = window.localStorage.getItem(keyName)
  let state: Playlist.State = defaultState
  if (data) {
    try {
      state = JSON.parse(data)
    } catch (e) {
      console.error('Could not parse local storage data: ', e)
    }
  }
  return cleanData(state)
}