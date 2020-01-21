#!/bin/bash
set -o errexit #exit with error code if something goes wrong.
if [ -z ${CI_APP_NAME} ]; then
echo "Not in Appflow skipping cordova hack";
else
echo "In Appflow...using cordova@8.1.2"
npm uninstall -g @ionic-enterprise/cordova
npm install -g cordova@8.1.2
cordova platform add ios@5.1.1
fi