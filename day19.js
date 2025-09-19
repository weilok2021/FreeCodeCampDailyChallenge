** start of script.js **

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  const photoSizeGb = photoSizeMb / 1000;
  const numPhotoFilledHardDrive = Math.floor(hardDriveSizeGb / photoSizeGb);
  return numPhotoFilledHardDrive;
}

console.log(numberOfPhotos(3.5, 750));

** end of script.js **

