import {
  getReleaseSource,
  downloadFlywaySource,
  extractToLib,
  copyToBin,
  rmTmpDirs
} from './utils'

getReleaseSource()
  .then(downloadFlywaySource)
  .then(extractToLib)
  .then(copyToBin)
  .then(rmTmpDirs)
  .catch(function (reason) {
    // Handle failed request...
    console.error(`error --> ${reason}`)
  })
