#!/bin/bash

# Set the dataset name and the path to the JSON files
DATASET_NAME="production"
JSON_FILES_PATH="/home/samuel/PrimeReserved/houvincity-app"

# Loop through each JSON file in the directory
for file in "$JSON_FILES_PATH"/*.json; do
  # Import the data into Sanity
  sanity dataset import $DATASET_NAME $file
done