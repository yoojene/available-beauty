#!/bin/bash -v

set -e
pwd
ls -r
# Build Ionic App for Android
ionic cordova platform add android --nofetch

if [[ "$TRAVIS_BRANCH" == "develop" ]]
then
    ionic cordova build android
else
    ionic cordova build android --prod --release
fi
