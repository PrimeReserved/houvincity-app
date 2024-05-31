#!/bin/bash

# Function to print tree structure to a file
print_tree() {
    local dir="$1"
    local indent="$2"
    local is_last="$3"
    local output_file="$4"

    # Print the current directory
    echo "${indent}$(basename "$dir")/" >> "$output_file"

    # Get the list of directories and files, excluding hidden ones
    local entries=($(find "$dir" -maxdepth 1 -mindepth 1 -not -name '.*' -not -name 'node_modules' -exec basename {} \; | sort))
    local total="${#entries[@]}"
    local i=1

    # Iterate through the directories and files
    for entry in "${entries[@]}"; do
        local connector="├──"
        local new_indent="$indent│   "

        if [ $i -eq $total ]; then
            connector="└──"
            new_indent="$indent    "
        fi

        if [ -d "$dir/$entry" ]; then
            echo "${indent}${connector} ${entry}/" >> "$output_file"
            print_tree "$dir/$entry" "$new_indent" "$((i == total))" "$output_file"
        else
            echo "${indent}${connector} ${entry}" >> "$output_file"
        fi
        ((i++))
    done
}

# Function to print messages if verbose mode is enabled
verbose_log() {
    if [ "$VERBOSE" == "true" ]; then
        echo "$1"
    fi
}

# Check if source directory is provided
if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
    echo "Usage: $0 <source_directory> [--verbose]"
    exit 1
fi

SOURCE_DIR="$1"
VERBOSE="false"
OUTPUT_FILE="tree-structured.md"

if [ "$#" -eq 2 ] && [ "$2" == "--verbose" ]; then
    VERBOSE="true"
fi

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Source directory does not exist."
    exit 1
fi

verbose_log "Generating tree structure for directory: $SOURCE_DIR"

# Create or clear the output file
echo "# Directory Structure" > "$OUTPUT_FILE"

# Print the tree structure to the output file
print_tree "$SOURCE_DIR" "" "" "$OUTPUT_FILE"

verbose_log "Tree structure generation completed. Output saved to $OUTPUT_FILE."
