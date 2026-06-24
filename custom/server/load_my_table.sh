#!/bin/bash
 
SCRIPT_DIR=$(dirname "$0")
 
echo "Loading my_network_cabinet feature..."
 
myw_db myproj load "$SCRIPT_DIR/my_network_cabinet.def"
 
echo "Feature load completed."