var canvasContext = null;
var video = null;
var readingQr = false;
var stream = undefined;
var rectSide = 0;

function canvasSupported() {
  const canvas = document.createElement('canvas');
  return !!(canvas.getContext && canvas.getContext('2d'));
}

function initCanvas() {
  const canvas = document.getElementById("qr-canvas");
  canvas.style.width = rectSide + "px";
  canvas.style.height = rectSide + "px";
  canvas.width = rectSide;
  canvas.height = rectSide;
  canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, rectSide, rectSide);
}

function captureToCanvas() {
  if (!readingQr) {
    return;
  }
  try {
    canvasContext.drawImage(video, 0, 0, rectSide, rectSide);
    qrcode.decode();
    setTimeout(captureToCanvas, 1000);
  }
  catch (e) {
    setTimeout(captureToCanvas, 100);
  }
}

function userMediaSuccess(s) {
  stream = s;
  video = document.getElementById("video");
  video.srcObject = stream;
  readingQr = true;
  captureToCanvas();
}

function userMediaError(notSupported){
  return function (error) {
    readingQr = false;
    notSupported("userMediaError=", error);
  }
}

function setupWebcam(notSupported) {
  if (readingQr) {
    return;
  }
  var isSafari = navigator.userAgent.indexOf("Chrome") === -1
    && navigator.userAgent.indexOf("Safari") > -1;

  var options = isSafari ? {video: true, audio: false}
    : {
      audio: false,
      video:
        {
          width: rectSide,
          height: rectSide,
          facingMode: "environment",
          frameRate: 10
        }
    };
  navigator.mediaDevices.getUserMedia(options)
    .then(userMediaSuccess)
    .catch(userMediaError(notSupported));

}

// public api
function startQr(side, success, notSupported) {
  if (!canvasSupported()) {
    notSupported("canvas not supported");
    return;
  }
  rectSide = side;
  initCanvas();
  qrcode.callback = success;
  setupWebcam(notSupported);
}

function stopQr() {
  readingQr = false;
  stream.getTracks().forEach(function (track) {
    track.stop()
  })
}

// tests
function read(a) {
  console.log(a);
}

function notSupported(e) {
  console.log("qr reading not supported.", e);
}

function load() {
  startQr(274, read, notSupported)
}
