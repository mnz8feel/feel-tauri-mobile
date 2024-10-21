#!/usr/bin/env bash

find . -type d -name "node_modules" -exec rm -rf {} \;
find . -type d -name "dist" -exec rm -rf {} \;
find . -type d -name "target" -exec rm -rf {} \;
find . -type d -name "playwright-report" -exec rm -rf {} \;
find . -type d -name "test-results" -exec rm -rf {} \;
find . -type d -wholename "*/src-tauri/gen/schemas" -exec rm -rf {} \;
