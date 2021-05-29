'use strict'

const video = document.querySelector('#player')

function gotMediaStram(stream) {
    video.srcObject = stream
}

function handleError(err) {
    console.error('get UserMedia error ~!')
}

if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.error('get UserMedia is not defined ~!')
} else {
    const constraints = {
        video: true,
        audio: true
    }

    navigator.mediaDevices.getUserMedia(constraints)
        .then(gotMediaStram)
        .catch(handleError)
}