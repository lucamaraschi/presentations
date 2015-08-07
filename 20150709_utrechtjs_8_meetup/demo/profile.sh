#!/bin/bash

if [[ $# -ne 1 ]]; then
    echo "usage: $(basename $0) PID"
fi

set -o xtrace
set -o errexit
set -o pipefail

dtrace -c 'sleep 10' \
  -n 'profile-97/pid == $1/{ @ [jstack(80, 8192)] = count(); }' "$@" \
  > demo-stacks.out
c++filt < demo-stacks.out > demo-stacks-filt.out
stackvis dtrace flamegraph-d3 < demo-stacks-filt.out > demo-stacks.svg
