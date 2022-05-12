#!/bin/bash

ls | while read x; do
	pushd "$x" > /dev/null
	find . -name "*.htm?" -o -name "*.*css" -o -name "*.js"
	popd
done