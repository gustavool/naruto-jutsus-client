#!/bin/sh
. "$(dirname "$0")/_/husky.shs"

npx lint-staged
